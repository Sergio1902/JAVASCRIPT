
export default function botonHamburguesa(btn, panel, ancla) {
    
    document.addEventListener("click",function (e) {
        if(e.target.matches(btn) || e.target.matches(`${btn} *`)){
            document.querySelector(panel).classList.toggle("is-active")
            document.querySelector(btn).classList.toggle("is-active")
        }
        if(e.target.matches(ancla)){
            document.querySelector(panel).classList.remove("is-active")
            document.querySelector(btn).classList.remove("is-active")
        }
        
    })
    


}