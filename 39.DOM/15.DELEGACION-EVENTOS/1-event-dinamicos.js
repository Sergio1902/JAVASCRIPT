// forma correcta de asignar - asignar eventos dinamicamente
/*
asignarlos al document - y luego designar eventos a cada 
elemento seleccionado
*/

function flujoEventos(e) {
    console.log(`soy el div ${this} - origino el evento el div ${e.target.className} `)
}

/*
manejador de eventos al document 
    saber a quien le he dado click dentro del DOM
*/
document.addEventListener("click",function (e) {
    console.log("click fue dado en " , e.target)

    // linkeventos 
    /*
    matches - devuelve boleean - al comparar con un parametro
    especial
    */
    if(e.target.matches(".eventos-flujo a")){
        alert("HOLA SOY SERGIO")
        e.preventDefault()
    }

    // div
    /*
    asignar a cada div un la funcion flujoEventos()
    */

    if(e.target.matches(".eventos-flujo div")){
        flujoEventos(e)
    }


})


