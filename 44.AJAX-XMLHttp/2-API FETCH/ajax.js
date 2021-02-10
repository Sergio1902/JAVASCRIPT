
(function() {
    // donde mostrar los datos en el DOM
   const $FETCH = document.getElementById("fecth") 
   const $FRAGMENTO = document.createDocumentFragment()

    /*
    iniciar una peticion metodo fecth(url)
    como es promosea utiliza 
        then() --> si es exitoso
        catch() --> mostrar el error
    */
    fetch("https://jsonplaceholder.typicode.com/user")
    
    .then(function (respuesta) {
        // ok - remplaza al ready status 4
        // la respuesta esta dada en formato readablestrean - necesita conversion
        
        // metodos para conversion json//text//blob
        // para ser enviado a otro then
        return (respuesta.ok === true) ?respuesta.json() :Promise.reject(respuesta)
        
    }).then(function (res) {
        console.log(res)

        res.forEach(element => {
            const $li = document.createElement("li")
            $li.innerHTML = element.name
            $FRAGMENTO.appendChild($li)
        });
        $FETCH.appendChild($FRAGMENTO)
    })
    .catch(function (error) {
        let messageError = error.statusText || "ERROR DEL PROGRADOR"
        $FETCH.innerHTML = messageError
    })
    .finally(function () {
        
    })



})()