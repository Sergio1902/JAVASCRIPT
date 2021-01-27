export function Reloj(Reloj,btnIniReloj, btnDetReloj, Audio ,btnIniAlarma, btnDetAlarma) {
    
    document.addEventListener("click", function (e) {
        let intervalo
        let intervalo2
        let audioAlarma = document.querySelector(Audio)

        if(e.target.matches(btnIniReloj)){
            intervalo=setInterval(() => {
                let horaActual = new Date().toLocaleTimeString()
                document.querySelector(Reloj).textContent = horaActual
            }, 1000);
            e.target.disabled = true 
        }
        if(e.target.matches(btnDetReloj)){
            clearInterval(intervalo)
            document.querySelector(Reloj).textContent = null
            document.querySelector(btnIniReloj).disabled = false 
        }
        if(e.target.matches(btnIniAlarma)){
            intervalo2 = setTimeout(() => {
                // activar el audio
                audioAlarma.play()
            }, 1000);
            document.querySelector(btnIniAlarma).disabled = true
        }
        if(e.target.matches(btnDetAlarma)){
            clearTimeout(intervalo2)
            audioAlarma.pause()
            audioAlarma.currentTime = 0
            document.querySelector(btnIniAlarma).disabled = false
            
        }





    })

}