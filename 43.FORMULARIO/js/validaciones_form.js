export default function contactFormValidations() {
    const $FORM = document.querySelector(".contact-form")
    const $IMPUT = document.querySelectorAll(".contact-form [required]")
    
    console.log($IMPUT)
    $IMPUT.forEach(function (element) {     
        const $SPAN = document.createElement("span")
        // relacionarlo al imput a traves de id
        $SPAN.id = element.name 
        // asiganarle el texto errors
        $SPAN.textContent = element.title

        $SPAN.classList.add(".contact-form-error", "none")

        // ubicacion
        element.insertAdjacentElement("afterend", $SPAN)
       
    } )

    document.addEventListener("keyup", function (e) {
        
        if(e.target.matches(".contact-form [required]")){
            
            let patter = e.target.pattern || e.target.dataset.pattern
            
            if(patter){
                // new expresion regular
                let expReg = new RegExp(patter)
                console.log(expReg)
                return expReg.exec(e.target.value)
                ? document.getElementById(e.target.name).classList.remove("is-active")
                : document.getElementById(e.target.name).classList.add("is-active")
        
            }
            
        }
        

    })



    
     
}