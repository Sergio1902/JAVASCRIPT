export default function scrollSpy() {

    // seccion con el atributo dta-scroll-spy
    const $section = document.querySelectorAll("section[data-scroll-spy]")

    // callback
    const cb = function (entries) {
        // asiganarlos por separado
        entries.forEach((entry) => {
        // obteniendo el id- necesario para identificar la section en la que estoy
        const id= entry.target.getAttribute("id")
    
        // hay una interseccion
        if(entry.isIntersecting){
            document.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add("active")
        }else{
            document.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("active")
        } 
        });
    }


    // necesita un callback - opciones
    const observador = new IntersectionObserver(cb, {
        // elemento base para medir el scroll 
        threshold: [0.5, 0.75]
    })
    /*
    asiganar el observador creado a cada
    seccion que tenga el atributo scroll
    */
   $section.forEach(element => {
    observador.observe(element)      
   });





}