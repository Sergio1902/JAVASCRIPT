import menuHamburguesa from './menu_hamburguesa.js'
import {Reloj} from './reloj.js'
import shortcuts, { moveBall } from './teclado.js'
import cuentaRegresiva from './cuenta_regresiva.js'
import btnScrollTop from './btn_scroll_top.js'
import btnTheme from './btn-theme.js'
import contentResponsive from './content-responsive.js'
import responsiveTester from './tester-responsive.js'
import userDeviceInfo from './dispositivos.js'
import networkStatus from './networkStatus.js'
import webCam from './web-cam.js'
import getGeolocalizacion from './geolocalizacion.js'
import searchFilters from './filtros_busqueda.js'
import draw from './sorteo.js'
import slider from './carrousel.js'
import scrollSpy from './scroll_espia.js'


document.addEventListener("DOMContentLoaded", function (e) {
    // funciones
    menuHamburguesa(".btn-hambur", ".panel", ".panel a");
    Reloj("#reloj","#btnIniciarReloj","#btnDetenerReloj", "#snd","#btnIniciarAlarma","#btnDetenerAlarma")
    cuentaRegresiva(".cuenta-regresiva","Jan 02, 2021 12:08:00","FELIZ CUMPLEAÑOS SERGIO")
    btnScrollTop(".scroll-top")
    contentResponsive("youtube-uno",
    "(max-width: 1024px)",
    `<a href="https://www.youtube.com/embed/6IwUl-4pAzc" target="_blank" >VER VIDEO</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
    contentResponsive("youtube-dos",
    "(max-width: 1024px)",
    `<a href="https://www.youtube.com/embed/6IwUl-4pAzc" target="_blank" >VER VIDEO</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
    responsiveTester("formulario");
    userDeviceInfo("user-device");
    webCam("web-cam")
    getGeolocalizacion("geolocalizacion")
    searchFilters(".card-filter",".card")
    draw(".btn_sorteo", ".player")
    slider()
    scrollSpy()
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
//      shortcuts(e)
// })



// GUARDAR UN TEMA OSCURO - CLARO AL ACTUALIZAR EL NAVEGADOR API LOCALSTORAGE
btnTheme(".btn-theme", ".btn-theme-figur", ".btn-theme-figure")
networkStatus()

