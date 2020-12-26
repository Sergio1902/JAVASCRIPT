import menuHamburguesa from './menu_hamburguesa.js'
import {Reloj} from './reloj.js'
import shortcuts from './teclado.js'

document.addEventListener("DOMContentLoaded", function (e) {
    // funciones
    menuHamburguesa(".btn-hambur", ".panel", ".panel a");
    Reloj("#reloj","#btnIniciarReloj","#btnDetenerReloj", "#snd","#btnIniciarAlarma","#btnDetenerAlarma")
    

})

// EJECUTAR AL PRESIONAR TECLA
    document.addEventListener("keydown", function (e) {
        shortcuts(e)
    })
// EJECUTAR CUANDO SUELTE LA TECLA
// document.addEventListener("keyup", function (e) {
//     shortcuts(e)
// })
// EJECUTAR MIENTRAS PRESIONAS LA TECLA
// document.addEventListener("keypress", function (e) { 
//         shortcuts(e)
// })