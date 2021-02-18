(function () {
    // "http://localhost:5550/santos"
    const $TABLE = document.querySelector(".crud-table")
    const $FORM = document.querySelector(".crud-form")
    const $TITLE = document.querySelector(".crud-title")
    const $TEMPLATE = document.getElementById("crud-template").content
    const $FRAGMENTO = document.createDocumentFragment()
    
    async function actualizarData() {
        try { 
            let FETCH = await fetch("http://localhost:5550/santos")
            let JSON = await FETCH.json()
            if(!FETCH.ok) throw {status: FETCH.status, statusText:FETCH.statusText}
            JSON.forEach(element => {
                $TEMPLATE.querySelector(".santos-name").textContent = element.nombre
                $TEMPLATE.querySelector(".santos-constelacion").textContent = element.constelacion
                
                $TEMPLATE.querySelector(".btn-edit").dataset.id = element.id
                $TEMPLATE.querySelector(".btn-edit").dataset.nombre = element.nombre
                $TEMPLATE.querySelector(".btn-edit").dataset.constelacion = element.constelacion

                $TEMPLATE.querySelector(".btn-delete").dataset.id = element.id

                const $CLON = document.importNode($TEMPLATE, true)
                $FRAGMENTO.appendChild($CLON)
            });
            $TABLE.querySelector("tbody").appendChild($FRAGMENTO)     
        } catch (error) {
            let message = error.statusText || "OCURRIO UN ERROR CON EL API"
            $FORM.insertAdjacentHTML("afterend", `<p><b>Error: ${error.status} ${message}</b></p>`)
        }
    }
    document.addEventListener("DOMContentLoaded", actualizarData())

    document.addEventListener("click", async function (e) {
        if(e.target.matches(".btn-edit")){
            $FORM.idedit.value = e.target.dataset.id
            $FORM.nombre.value = e.target.dataset.nombre
            $FORM.constelacion.value = e.target.dataset.constelacion
        }
        if(e.target.matches(".btn-delete")){
            let respuesta = confirm("ESTA SEGURO DE ELIMINAR EL REGISTRO")
            if(respuesta){
                try {
                    let options = {
                        /*
                        son opciones dadas dentro del API de FETCH
                            metodo --> metodo
                            headers --> remplaza al requestheader de AJAX
                            body --> remplaza a la data ya modificada
                        */
                        method: "DELETE",
                        headers: {
                            "Content-type":"application/json; charset=utf-8"
                        }
                    }
                    FETCH = await fetch(`http://localhost:5550/santos/${e.target.dataset.id}`, options)
                    JSON = await FETCH.json()
                    if(!FETCH.ok) throw {status: FETCH.status, statusText:FETCH.statusText}      
                } catch (error) {
                    let message = error.statusText || "OCURRIO UN ERROR CON EL API"
                    $FORM.insertAdjacentHTML("afterend", `<p><b>Error: ${error.status} ${message}</b></p>`)
                }
            }
        }
    })
    
    document.addEventListener("submit", async function (e) {
        if(e.target === $FORM){
            e.preventDefault()
            if($FORM.idedit.value){
                try {
                    let options = {
                        /*
                        son opciones dadas dentro del API de FETCH
                            metodo --> metodo
                            headers --> remplaza al requestheader de AJAX
                            body --> remplaza a la data ya modificada
                        */
                        method: "PUT",
                        headers: {
                            "Content-type":"application/json; charset=utf-8"
                        },
                        body: JSON.stringify({
                            nombre: $FORM.nombre.value,
                            constelacion: $FORM.constelacion.value
                        })
                    }
                    FETCH = await fetch(`http://localhost:5550/santos/${$FORM.idedit.value}`, options)
                    JSON = await FETCH.json()

                    if(!FETCH.ok) throw {status: FETCH.status, statusText:FETCH.statusText}
                    
                } catch (error) {
                    let message = error.statusText || "OCURRIO UN ERROR CON EL API"
                    $FORM.insertAdjacentHTML("afterend", `<p><b>Error: ${error.status} ${message}</b></p>`)
                }
            }else{
                try {
                    let options = {
                        /*
                        son opciones dadas dentro del API de FETCH
                            metodo --> metodo
                            headers --> remplaza al requestheader de AJAX
                            body --> remplaza a la data ya modificada
                        */
                        method: "POST",
                        headers: {
                            "Content-type":"application/json; charset=utf-8"
                        },
                        body: JSON.stringify({
                            nombre: $FORM.nombre.value,
                            constelacion: $FORM.constelacion.value
                        })
                    }
                    FETCH = await fetch("http://localhost:5550/santos", options)
                    JSON = await FETCH.json()

                    if(!FETCH.ok) throw {status: FETCH.status, statusText:FETCH.statusText}

                } catch (error) {
                    let message = error.statusText || "OCURRIO UN ERROR CON EL API"
                    $FORM.insertAdjacentHTML("afterend", `<p><b>Error: ${error.status} ${message}</b></p>`)
                }
            }
        }
    })

})()