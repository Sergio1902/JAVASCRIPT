(function () {

    const $TABLE = document.querySelector(".crud-table")
    const $FORM = document.querySelector(".crud-form")
    const $TITLE = document.querySelector(".crud-title")
    const $TEMPLATE = document.getElementById("crud-template").content
    const $FRAGMENTO = document.createDocumentFragment()
    
    const AJAX = function (options) {
        if(!(options instanceof Object)) return
        let {metodo, url, succes, error, data} = options 
        //4 EVENTOS PRIMORDIALES  
            const xhr = new XMLHttpRequest()          
            xhr.addEventListener("readystatechange", function (e) {   
                
                if(xhr.readyState !== 4) return
                if(xhr.status>=200 && xhr.status<300){
                    // cambio de formato 
                    const json = JSON.parse(xhr.responseText)               
                    succes(json)  
                }else{
                    const message = xhr.responseType || "OCURRIO UN ERROR"
                    error(`${xhr.status} ${message}`)
                }
            })
            xhr.open(metodo||"GET", url)
            // creacion de cabeceras en la API por cualquer modificacion
            xhr.setRequestHeader("Content-type","application/json; charset=utf-8")
            /*  la data modificada regresa a la API
                la info manipulada esta en formato plano para ser
                regresada debe estar en formato JSON */
            xhr.send(JSON.stringify(data))
        ///////////////////////////////
    }
    
    function actualizarData() {
        AJAX({
            metodo:"GET",
            url: "http://localhost:5550/santos",
            succes: function(respuesta) { 
                respuesta.forEach(element => {
                    $TEMPLATE.querySelector(".santos-name").textContent = element.nombre 
                    $TEMPLATE.querySelector(".santos-constelacion").textContent = element.constelacion
                    $TEMPLATE.querySelector(".btn-edit").dataset.id = element.id
                    $TEMPLATE.querySelector(".btn-edit").dataset.nombre = element.nombre
                    $TEMPLATE.querySelector(".btn-edit").dataset.constelacion = element.constelacion
                    $TEMPLATE.querySelector(".btn-delete").dataset.id = element.id
                    // las templates necesitan un clon antes de agregar al DOM
                    const $CLON = document.importNode($TEMPLATE, true)
                    $FRAGMENTO.appendChild($CLON)
                    });
                $TABLE.querySelector("tbody").appendChild($FRAGMENTO)
            },
            
            error: function(error) {console.log(error)},
            data: null //NULL porque la data no se ha modificado
        })
    }

    document.addEventListener("DOMContentLoaded", actualizarData())

    document.addEventListener("click", function (e) {
        if(e.target.matches(".btn-edit")){
            $TITLE.textContent = "MODIFICAR SANTOS"
            $FORM.nombre.value = e.target.dataset.nombre
            $FORM.constelacion.value = e.target.dataset.constelacion
            $FORM.idedit.value = e.target.dataset.id
        }
        if(e.target.matches(".btn-delete")){
            e.preventDefault()
            let confirmar = confirm("DESEA ELIMINAR EL RESGISTRO ? ")
            if(confirmar){
                const $ID = e.target.dataset.id
                AJAX({
                    metodo: "DELETE",
                    url: `http://localhost:5550/santos/${$ID}`,
                    succes: function(respuesta) {
                        console.log(respuesta)
                    },
                    error: function() {
                        
                    }
                })
            }
        }
    })

    document.addEventListener("submit",function (e) {
        // indicando que el evento SUBMIT este dentro del Formulario asiganado
        e.preventDefault()
        if(e.target === $FORM){
            /* INSERTAR O ACTUALIZAR 
            para entrar a cada imput directamente desde el formulario
            clas o id del form seguido de punto el name del input y 
            value para valor
            */
            if(!$FORM.idedit.value){
                AJAX({
                    metodo: "POST",
                    url:"http://localhost:5550/santos",
                    succes: function (respuesta) {
                        location.reload()
                    },
                    error: (function (error) {
                        $FORM.insertAdjacentHTML("afterend", `<p> ${error} </p>`)
                    }),
                    // insercion de datos
                    data:{
                        nombre: $FORM.nombre.value,
                        constelacion : $FORM.constelacion.value
                    }
                })
                
            }else{

                // PUT ACTUALIZAR
                AJAX({
                    metodo: "PUT",
                    url: `http://localhost:5550/santos/${e.target.idedit.value}`,
                    succes: function (respuesta) {
                        location.reload()
                    },
                    error: (function (error) {
                        $FORM.insertAdjacentHTML("afterend", `<p> ${error} </p>`)
                    }),
                    // insercion de datos
                    data:{
                        nombre: $FORM.nombre.value,
                        constelacion : $FORM.constelacion.value
                    }
                })
                
            }
        }
    })


})()