// extension de simple react snippets
// para importar y exportar funciones de js

export default function menuHamburguesa(panelBtn,panel,menuLink) {
    // manejador de eventos
    document.addEventListener("click",function (e) {
        
        if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){
            // panel - recibe la clase
            // query selecto ubica ese fragmento
            document.querySelector(panel).classList.toggle("is-active")   
        }
        if(e.target.matches(menuLink)){
            document.querySelector(panelBtn).classList.remove("is-active")
            document.querySelector(panel).classList.remove("is-active")
        }
    })
}

