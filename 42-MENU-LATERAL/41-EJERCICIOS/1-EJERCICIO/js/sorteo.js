export default function draw(btnGanador, selector) {
 
    function ganador(selector) {
        const $selectores = document.querySelectorAll(selector)
        let numero = Math.floor((Math.random() * $selectores.length))
        let numeroGanador = $selectores[numero]
        
        alert(`el ganador es ${numeroGanador.textContent}`)
    }


document.addEventListener("click", function (e) {
    if(e.target.matches(btnGanador)){
        ganador(selector)
    }


})



}