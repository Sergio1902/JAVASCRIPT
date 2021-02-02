import menuHamburguesa from './menu_hamburguesa.js'
import btnScrollTop from './btn_scroll_top.js'
import btnTheme from './btn-theme.js'
import scrollSpy from './scroll_espia.js'
import contactFormValidations from './validaciones_form.js'



document.addEventListener("DOMContentLoaded", function (e) {
    // funciones
    menuHamburguesa(".btn-hambur", ".panel", ".panel a");
    btnScrollTop(".scroll-top")
    scrollSpy()
    contactFormValidations()

})


// GUARDAR UN TEMA OSCURO - CLARO AL ACTUALIZAR EL NAVEGADOR API LOCALSTORAGE
btnTheme(".btn-theme", ".btn-theme-figur", ".btn-theme-figure")


