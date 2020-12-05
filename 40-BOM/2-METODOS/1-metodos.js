const $DIV = document.createElement("div")
const $BODY = document.body
$BODY.prepend($DIV)

$BODY.querySelector("div").style.width = "1500px"
$BODY.querySelector("div").style.height = "200px"
$BODY.querySelector("div").style.background = "red"


// metodo de confirmacion - pregunta
// window.confirm("confirmacion")
// metodo de alerta en mensaje
// window.alert("holaaaaaaaa")
// metodo deingresar un input
// window.prompt("ingresa algo")

const $ABRIR = document.getElementById("abrir-ventana")
const $CERRAR = document.getElementById("cerrar-ventana")
const $IMPRIMIR = document.getElementById("imprimir-ventana")

// variable para cerrar 
let ventana 

$ABRIR.addEventListener("click", function (e) {
    // abrir una pantalla target
    ventana = window.open("https://www.google.com/")
})

$CERRAR.addEventListener("click", function (e) {
    /*
    para cerrar una ventana es necesario crear una variable
    almacenado dicha pagina o ventana
    */
    // cierra la pestana principal donde estoy
    // window.close()

    // cerrar una ventana en especial
    ventana.close()

})

$IMPRIMIR.addEventListener("click", function (e) {
    window.print()
})