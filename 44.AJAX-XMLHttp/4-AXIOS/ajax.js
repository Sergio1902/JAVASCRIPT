
(function() {

    // donde mostrar los datos en el DOM
    const $AXIOS = document.getElementById("axios") 
    const $FRAGMENTO = document.createDocumentFragment()

    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(function (respuesta) {
        
        // la data no necesita conversion
        const DATA = respuesta.data 
        DATA.forEach(element => {
            const $LI = document.createElement("li")
            $LI.innerHTML = element.name
            $FRAGMENTO.appendChild($LI)
        });
        $AXIOS.appendChild($FRAGMENTO)
    })
    .catch(function (error) {
        // error se utiliza el error.response
        const mesagge = error.response.statusText || "OCURRIO UN ERROR"
        $AXIOS.innerHTML = `error: ${error.response.status} ${mesagge}`
    })
    .finally(function () {
        
    })

})()