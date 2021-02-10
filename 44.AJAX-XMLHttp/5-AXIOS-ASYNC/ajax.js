
(function() {

    // donde mostrar los datos en el DOM
    const $AXIOS = document.getElementById("axios-async") 
    const $FRAGMENTO = document.createDocumentFragment()

    async function AXIOSASYNC() {
        try {
            // await solo a la url y a la conversion 
            const AXIOS = await axios.get("https://jsonplaceholder.typicode.com/users")
            const DATA = await AXIOS.data 
            
            // la data no necesita conversion
            DATA.forEach(element => {
                const $LI = document.createElement("li")
                $LI.innerHTML = element.name
                $FRAGMENTO.appendChild($LI)
            });
            $AXIOS.appendChild($FRAGMENTO)

        } catch (error) {
            // console.log(error.response.statusText)
            const mesagge = error.response.statusText || "OCURRIO UN ERROR"
            $AXIOS.innerHTML = `error: ${error.response.status} ${mesagge}`
        } finally{

        }
    }
    AXIOSASYNC()

})()