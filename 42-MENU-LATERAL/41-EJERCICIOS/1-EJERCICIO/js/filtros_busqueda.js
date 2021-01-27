export default function searchFilters(input, buscar) {
    
    document.addEventListener("keyup", function (e) {
       
        if(e.target.matches(input)){

            // obtener el valor de la caja input
            let caja = e.target.value.toLowerCase()
            
            // donde buscar
           document.querySelectorAll(buscar).forEach(element => {
                element.textContent.toLowerCase().includes(caja)
                ? element.classList.remove("filter")
                : element.classList.add("filter")
           });
           


        }
    })



}