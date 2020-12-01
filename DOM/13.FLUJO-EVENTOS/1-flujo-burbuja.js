// flujo burbuja 
/*
desde lo mas pequeño a lo mas grande
    un evento pequeño - DOM CONTEXTO GLOBAL

    asignar dinamicamente un evento a cada div
*/
const $divEventos = document.querySelectorAll(".eventos-flujo div")

function flujoEventos(e) {
    console.log(`soy el div ${this.className} - origino el evento el div ${e.target.className} `)
}

$divEventos.forEach((div) => {
    div.addEventListener("click",flujoEventos)
});

// flujo captura
/*
desde lo mas pequeño a lo mas grande
    un evento pequeño - DOM CONTEXTO GLOBAL
    
    asignar dinamicamente un evento a cada div
*/