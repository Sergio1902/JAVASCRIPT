import menuHamburguesa from './menu_hamburguesa.js'
import {Reloj} from './reloj.js'

document.addEventListener("DOMContentLoaded", function (e) {
    menuHamburguesa(".btn-hambur", ".panel", ".panel a");
    Reloj("#reloj","#btnIniciarReloj","#btnDetenerReloj", "#snd","#btnIniciarAlarma","#btnDetenerAlarma")
})

