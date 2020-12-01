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

// evento multiple

/*
    addEventListener - no utiliza on
    utilizado para ejecutar varios eventos a un mismo manejador
    agregare eventos - escuchar eventos
*/

$eventoMultiple = document.getElementById("evento-multiple")

/*
solo se nombra la funcion sin parentesis
va sin parentesis porque solo se ejecuta la funcion cuando
se requiere
*/
$eventoMultiple.addEventListener("click",holaMundo)
$eventoMultiple.addEventListener("click",function (e) {
    console.log("SOY UN EVENTO MULTIPLE")
    console.log(event)
    console.log(e)
    console.log(event.target)
    console.log(event.type)
})



