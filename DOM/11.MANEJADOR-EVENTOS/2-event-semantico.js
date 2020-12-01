function holaMundo() {
    alert("hola Mundo")
/*
    Event - indica las caracteristicas
    las mas importantes - 
    type - tipo de evento 
    target - desde donde se realizo la operacion 
*/
    // ivent pronunciacion
    console.log(event)

}

// evento semantico

const $eventoSemantico = document.getElementById("evento-semantico")
/*
de utilizar un evento semantico
con la palabra on - al igualarla a una funcion 
no es necesario colocar los parentesis

eventos semantico - es necesario utlizar ON
*/

// onclick la funcion interna no recibe parametros
// no asiganar diferentes funciones a un mismo evento


$eventoSemantico.onclick = holaMundo
$eventoSemantico.onclick = function () {
    alert("MANEJADOR DE EVENTO SEMANTICO - FUNCION ANONIMA")
}

