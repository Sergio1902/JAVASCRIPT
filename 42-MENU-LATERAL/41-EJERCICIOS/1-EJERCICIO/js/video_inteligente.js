export default function smartVideo() {

    // REPODUCIR MULTIMEDIA CON EL SCROLL
        // obetner las etiquetas videos que contengan ese atributo
        const $video = document.querySelectorAll("video[data-smart-video]") 
        // collback necesario al observador
        const cb = function (entries) {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    entry.target.play()
                }else{
                    entry.target.pause()
                }

                // DETENER MULTIMEDIA AL CAMBIAR DE PESTAÑA
                    // evento visivilitychange
                window.addEventListener("visibilitychange", function (e) {
                    // propiedad para saber el estado del documento
                    document.visibilityState === "visible"
                    ? entry.target.play()
                    : entry.target.pause()
                })


            });
        }
        // creando el observador (recibe collback, objeto con opciones)
        const observador = new IntersectionObserver(cb, {threshold: 0.5})
        // asiganado el observador a las etiquetas
        $video.forEach(element => {
            observador.observe(element)
        });

    


}