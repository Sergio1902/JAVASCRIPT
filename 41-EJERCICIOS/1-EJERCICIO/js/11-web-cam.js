export default function webCam(id) {
    // capturando el id del documento video
    const $video = document.getElementById(id)

    // API - verifica la camara web
    if(navigator.mediaDevices.getUserMedia){
        navigator.mediaDevices.getUserMedia(
            {  video:true, 
               audio:false
            }).then(function (stream) {
                // stream -- captura la imagen de la camara web
                // alamcena en un objeto
                $video.srcObject = stream
                $video.play()
            }).catch(function (error) {
                $video.insertAdjacentHTML("beforebegin", `<p>error: ${error} </p>`)
            })

    }
}