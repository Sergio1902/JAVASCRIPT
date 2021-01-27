export default function responsiveTester(formulario) {
    let ventana
    let $form = document.getElementById(formulario)
    /*
    para formularios y hacer la comparacion de click o submit 
    se utiliza el === en vez del matches */

    document.addEventListener("submit", function (e) {
        // no recargue pagina 
        // sooo ejecuta la orden actual
        e.preventDefault()

        if(e.target === $form){
            // abrir ventana
            // 4 valores (url abrir, nombre, tamaños, boolean)
            ventana = window.open($form.url.value,
                "tester", 
                `innerWidth=${$form.ancho.value}
                 innerHeight=${$form.alto.value}`)
        }
    })

    document.addEventListener("click", function (e) {
        
        if(e.target === ($form.cerrar)){
            ventana.close()
        }

    })

}