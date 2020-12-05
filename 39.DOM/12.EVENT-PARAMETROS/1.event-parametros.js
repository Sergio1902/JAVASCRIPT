$manejadorMultiple = document.getElementById("manejador-multiple")

function saludar(nombre = "Desconocid@") {
    alert(` hola ${nombre} `)
}
/*
toda funcion que sea parte de un manejador de eventos 
no puede recibir mas parametros - solo el event
*/
$manejadorMultiple.addEventListener("click",saludar)

/*
la funcion anonima y el arrow function pasan a ser 
las funciones manejadoras de eventos
*/

// recibir parametros

// 1 forma  - funcion anonima

$manejadorMultiple.addEventListener("click", function() {
    // asignar parametros
    saludar()
})

// 2 forma - arrow function

$manejadorMultiple.addEventListener("click",()=>{
    // asignar parametros
    saludar()
    saludar("sergio")
})
