// el teclado tiene tres eventos
// se pueden asignar al document y a imput



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