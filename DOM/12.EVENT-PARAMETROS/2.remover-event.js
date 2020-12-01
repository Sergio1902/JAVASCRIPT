$removedorEventos = document.getElementById("removedor-eventos")

// para remover eventos solo se realiza con manejadores multiples
// no utilizar funcion anonima - arrow function
/*
para asignar el removeEventListener(evento, funcion) se necesita una funcion 
declarada o expresada
*/

const removerDobleClick = function () {
    alert("eliminado el evento remover")

    $removedorEventos.removeEventListener("dblclick",removerDobleClick)
    $removedorEventos.disabled = true
}

$removedorEventos.addEventListener("dblclick", removerDobleClick)