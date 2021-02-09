// funcion asincrona para reutilizarla
// inicio de conusmo de API

(function() {
    //xhr se utiliza como nombre estandar 
    // instancias un objeto
   const xhr = new XMLHttpRequest()

    //lugar del documento donde mostrar los datos de la API
   const $xhr = document.getElementById("xhr") 

    console.log(xhr)

   const $FRAGMENTO = document.createDocumentFragment()

    // evento mas utilizado por el XMLHttpsRequest
    xhr.addEventListener("readystatechange", function(e) {
        
        // validacion - que cumpla los 4 estados de peticion
        if(xhr.readyState !== 4) return
        // cumplir con respuestas que no sean errores
        if(xhr.status>=200 && xhr.status<300){

            // convertir formato json a formato textual
            let JSONa = JSON.parse(xhr.responseText)
            // console.log(JSONa)
            JSONa.forEach(element => {
                let $li = document.createElement("li")
                $li.innerHTML = element.name
                $FRAGMENTO.appendChild($li)
            });

            $xhr.appendChild($FRAGMENTO)

        }else{
            let messageError = xhr.statusText || "OCURRIO UN ERROR GRAVE"
            $xhr.innerHTML = `error: ${xhr.status} - ${messageError}`
        }

    })

    // iniciar una peticion ("GET","URL-API")
    xhr.open("GET","https://jsonplaceholder.typicode.com/users")

    // solicitar datos -recibe datos
    xhr.send()

})()