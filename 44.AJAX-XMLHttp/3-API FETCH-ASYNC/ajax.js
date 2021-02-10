
(function() {

    // donde mostrar los datos en el DOM
    const $FETCHASINC = document.getElementById("fecth-async") 
   const $FRAGMENTO = document.createDocumentFragment()

    async function funcionAsyncFetch() {
        try {
            const FETCH = await fetch("https://jsonplaceholder.typicode.com/users")

            // funcion asincrona se utiliza el throw en vez de return
            if(FETCH.ok !== true) throw {status: FETCH.status, statusText: FETCH.statusText}
        
            const JSON = await FETCH.json()
            JSON.forEach(element => {
                const $LI = document.createElement("li")
                $LI.innerHTML = element.name
                $FRAGMENTO.appendChild($LI)
            });

            $FETCHASINC.appendChild($FRAGMENTO)

        } catch (error) {
            const mesagge = error.statusText || "OCURRIO UN ERROR" 
            $FETCHASINC.innerHTML = `ERROR: ${error.status} ${mesagge}`

        } finally{
            
        }
    }
    funcionAsyncFetch()

})()