const $DIV = document.createElement("div")
const $BODY = document.body
$BODY.prepend($DIV)

$BODY.querySelector("div").style.width = "1500px"
$BODY.querySelector("div").style.height = "200px"
$BODY.querySelector("div").style.background = "red"




// ancho de la ventana
console.log(window.innerWidth)
// alto de la ventana
console.log(window,innerHeight)

// resolucion
console.log(window.outerHeight)
console.log(window.outerWidth)

// evento risize - modificar el tamaño
window.addEventListener("resize",function (e) {
    console.clear()
    console.log(" :::::::  evento resize :::::::: ")
    console.log(window.innerWidth)
    console.log(window.innerHeight)
    console.log(window.outerHeight)
    console.log(window.outerWidth)
})

// evento scroll - que tanto se mueve la barra
window.addEventListener("scroll",function (e) {
    console.clear()
    console.log(" ::::::: evento scroll :::::::::: ")
    // que tanto se mueve el scroll en el eje X
    console.log(window.scrollX)
    // que tanto se mueve el scroll en el eje Y
    console.log(window.scrollY)
})

/*evento load - se ejecuta cuando se terminada de cargar 
la pantalla principal*/
window.addEventListener("load",function (e) {
    console.clear()
    console.log(" ::::::: evento load :::::::::: ")
    /*tamaño del navegador con respecto a la pantalla
    principal en el eje X*/
    console.log(window.screenX)
    /*tamaño del navegador con respecto a la pantalla
    principal en el eje Y*/
    console.log(window.screenY)
})

/*evento DOMContentLoaded - mas rapido para inicializar
una pagina */
document.addEventListener("DOMContentLoaded",function (e) {
    console.log(" ::::::: evento DOMContentLoaded :::::::::: ")
    console.log(window.screenX)
    console.log(window.screenY)
    // muestra mucho mas rapido los internamente de la funcion
})