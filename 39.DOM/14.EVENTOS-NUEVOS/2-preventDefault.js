// flujo burbuja 
/*
desde lo mas pequeño a lo mas grande
    un evento pequeño - DOM CONTEXTO GLOBAL

    asignar dinamicamente un evento a cada div
*/
const $divEventos = document.querySelectorAll(".eventos-flujo div")

// selecciono al primer enlace
const $linkEventos = document.querySelector(".eventos-flujo a")

function flujoEventos(e) {
    console.log(`soy el div ${this.className} - origino el evento el div ${e.target.className} `)
    
    // cortar la propagacion del flujo de eventos
    // solo mostrara una vez el mensaje
    // este metodo solo funcione con event
    e.stopPropagation()
}

$divEventos.forEach((div) => {
    div.addEventListener("click",flujoEventos)
});

$linkEventos.addEventListener("click", function (e) {
    alert("HOLA SOY SERGIO")
    alert("afadd")

    // este metodo solo funciona desde el event
    // solo ejecuta el primer manejador de eventos
    // los eventos siguientos los obvia
    e.preventDefault()

})



