(function () {
    // "http://localhost:5550/santos"
    const $TABLE = document.querySelector(".crud-table")
    const $FORM = document.querySelector(".crud-form")
    const $TITLE = document.querySelector(".crud-title")
    const $TEMPLATE = document.getElementById("crud-template").content
    const $FRAGMENTO = document.createDocumentFragment()
    
    async function actualizarTabla() {
        try {
            let AXIOS = await axios.get("http://localhost:5550/santos")
            let JSON = await AXIOS.data
            /*
                la libreria axios 
                no necesita conversion de data (axios.data)
                no necesita llamar al error para enviarlo al catch
            */
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
            const message = error.statusText || "OCURRIO UN ERROR"
            $TABLE.insertAdjacentHTML("afterend", `<p>Error: ${error.status} ${message}</p>`)
        }
    }

    document.addEventListener("DOMContentLoaded", actualizarTabla())
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
                        method: "DELETE",
                        headers: {
                            "Content-type":"application/json; charset=utf-8"
                        }
                    }
                    AXIOS = await fetch(`http://localhost:5550/santos/${e.target.dataset.id}`, options)
                    JSON = await AXIOS.data
     
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
                        method: "PUT",
                        headers: {
                            "Content-type":"application/json; charset=utf-8"
                        },
                        // la palabra reservada body - data
                        data: JSON.stringify({
                            nombre: $FORM.nombre.value,
                            constelacion: $FORM.constelacion.value
                        })
                    }
                    AXIOS = await axios(`http://localhost:5550/santos/${$FORM.idedit.value}`, options)
                    JSON = await AXIOS.data
                    
                } catch (error) {
                    let message = error.statusText || "OCURRIO UN ERROR CON EL API"
                    $FORM.insertAdjacentHTML("afterend", `<p><b>Error: ${error.status} ${message}</b></p>`)
                }
            }else{
                try {
                    let options = {
                        method: "POST",
                        headers: {
                            "Content-type":"application/json; charset=utf-8"
                        },
                        data: JSON.stringify({
                            nombre: $FORM.nombre.value,
                            constelacion: $FORM.constelacion.value
                        })
                    }
                    AXIOS = await axios("http://localhost:5550/santos", options)
                    JSON = await AXIOS.data

                } catch (error) {
                    let message = error.statusText || "OCURRIO UN ERROR CON EL API"
                    $FORM.insertAdjacentHTML("afterend", `<p><b>Error: ${error.status} ${message}</b></p>`)
                }
            }
        }
    })

})()