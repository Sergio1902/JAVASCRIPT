// flujo captura
/*
desde lo mas grande a lo mas pequeño
    DOM CONTEXTO GLOBAL - evento pequeño
    
    asignar dinamicamente un evento a cada div
    esto funciona asignando un tercer parametro
        true - indica flujo de captura
        false - indica flujo burbuja puede o no llevar 
        el tercer parametro
*/
const $divEventos = document.querySelectorAll(".eventos-flujo div")

function flujoEventos(e) {
    console.log(`soy el div ${this.className} - origino el evento el div ${e.target.className} `)
}
/*
en el tercer parametro se puede indicar un objeto 
inidicando mas de un propiedad
*/
$divEventos.forEach((div) => {
    div.addEventListener("click",flujoEventos,{
        capture:true,
        // permite ejecutar una sola vez los eventos
        once:true
    }) 
});

