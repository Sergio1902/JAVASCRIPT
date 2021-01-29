export default function btnTheme(btnTheme, luna, sol) {

    let theme;


    document.addEventListener("click", function (e) {
        if(e.target.matches(btnTheme) || (e.target.matches(`${btnTheme} *`))){
            document.querySelector(sol).classList.toggle("hiden-theme")
            document.querySelector(luna).classList.toggle("hiden-theme")

            // seleccionar a varios atributos --> []
            document.querySelectorAll("[data-dark]").forEach(element => {
                theme = element.classList.toggle("theme-dark")
                
            });
            if(theme.toString() === "true"){
                 localStorage.setItem("theme","negro")
                 console.log("NEGRO")
            }
            if(theme.toString() === "false"){
                localStorage.setItem("theme","blanco")
                console.log("BLANCO")
           }    
        } 
    })

    // api localStorage
    document.addEventListener("DOMContentLoaded", function (e) {
        
        if(localStorage.getItem("theme") === "negro"){
            document.querySelectorAll("[data-dark]").forEach(element => {
                element.classList.add("theme-dark")
            });
        }  
    })



}