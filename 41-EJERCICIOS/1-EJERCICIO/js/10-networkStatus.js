export default function networkStatus() {
    /*
    ::::::deteccion de red:::::: 
    manejador de eventos desde el windows, tipo online - offline
    funcion navigator - online // offline
    */
    const $div = document.createElement("div")

    const isOnline = function() {
        if(navigator.onLine){
            $div.textContent = "conexion establecida"
            $div.classList.add("online")
            $div.classList.remove("offline")
        }else{
            $div.textContent = "conexion perdida"
            $div.classList.add("offline")
            
        }
        document.body.insertAdjacentElement("afterbegin", $div)
        setTimeout(() => {
            document.body.removeChild($div)
        }, 2000);
    }
    window.addEventListener("online", function (e) {
        isOnline()
    })
    window.addEventListener("offline", function (e) {
        isOnline()
    })
}