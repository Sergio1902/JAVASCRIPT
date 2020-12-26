// el teclado tiene tres eventos
// se pueden asignar al document y a imput
let x = 0, y = 0
export function moveBall(e, ball, stage) {
    
// obtiene los limites de left rigth bootom top
let $limiteBall = document.querySelector(ball).getBoundingClientRect()
let $limiteStage = document.querySelector(stage).getBoundingClientRect()



    switch (e.keyCode) {
        case 37:
            e.preventDefault()
            if($limiteBall.left>$limiteStage.left) x--
            break;
        case 38:
            e.preventDefault()
            if($limiteBall.top>$limiteStage.top)
            y--
            break;
        case 39:
            e.preventDefault()
            if($limiteBall.right<$limiteStage.right)
            x++
            break;
        case 40:
            e.preventDefault()
            if($limiteBall.bottom<$limiteStage.bottom)
            y++
            break;
        default:
            break;
    }
   document.querySelector(ball).style.transform = `translate(${x*10}px, ${y*10}px)`
   
}



export default function shortcuts(e) {
    // console.log(e)
    // console.log(e.key)
    // console.log(e.keyCode)

    // crear atajos de teclado
    
    if(e.key === "a" && e.altKey){
        alert("esto es una alerta")
    }
    if(e.key === "s" && e.ctrlKey){
        prompt ("esto es una alerta")
    }
}