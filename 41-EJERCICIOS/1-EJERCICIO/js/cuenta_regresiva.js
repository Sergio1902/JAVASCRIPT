export default function cuentaRegresiva(cuentaRegresiva, limiteDate, finalMessage) {
    let intervalo
    // getTime - convertir a milisegundos
    const $limiteDate = new Date(limiteDate).getTime()
    let limiteTempo
    
    intervalo = setInterval(() => {
        
        limiteTempo = $limiteDate - new Date().getTime()
        let dias = (Math.floor(limiteTempo/(1000*60*60*24))),
        horas = ("0" + Math.floor(((limiteTempo%(1000*60*60*24))/(1000*60*60)))).slice(-2),
        
        minutos = ("0" + Math.floor((limiteTempo%(1000*60*60))/(1000*60))).slice(-2),
        segundos = ("0" + Math.floor((limiteTempo%(1000*60))/(1000))).slice(-2)

        document.querySelector(cuentaRegresiva).innerHTML = 
        `<h3> Faltan ${dias} dias, ${horas} horas, ${minutos} minutos, ${segundos} segundos </h3>`

        
        if(limiteTempo<0){
            clearInterval(intervalo)
            document.querySelector(cuentaRegresiva).innerHTML = `<h3> ${finalMessage} </h3>`
        }


     }, 1000);      
    

}