import menuHamburguesa from './menu_hamburguesa.js'
import {Reloj} from './reloj.js'
import shortcuts, { moveBall } from './teclado.js'
import cuentaRegresiva from './cuenta_regresiva.js'
import btnScrollTop from './btn_scroll_top.js'
import btnTheme from './btn-theme.js'

document.addEventListener("DOMContentLoaded", function (e) {
    // funciones
    menuHamburguesa(".btn-hambur", ".panel", ".panel a");
    Reloj("#reloj","#btnIniciarReloj","#btnDetenerReloj", "#snd","#btnIniciarAlarma","#btnDetenerAlarma")
    cuentaRegresiva(".cuenta-regresiva","Jan 02, 2021 12:08:00","FELIZ CUMPLEAÑOS SERGIO")
    btnScrollTop(".scroll-top")
})


// EJECUTAR AL PRESIONAR TECLA
    document.addEventListener("keydown", function (e) {
        shortcuts(e)
        moveBall(e, ".ball",".stage")
    })
// EJECUTAR CUANDO SUELTE LA TECLA
// document.addEventListener("keyup", function (e) {
//     shortcuts(e)
// })
// EJECUTAR MIENTRAS PRESIONAS LA TECLA
// document.addEventListener("keypress", function (e) { 
//         shortcuts(e)
// })



// GUARDAR UN TEMA OSCURO - CLARO AL ACTUALIZAR EL NAVEGADOR API LOCALSTORAGE
btnTheme(".btn-theme", ".btn-theme-figur", ".btn-theme-figure")