export default function getGeolocalizacion(id) {
    const $geolocalizacion = document.getElementById(id)

    // se necesita 3 formatos

    // opciones
    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    }
    
    // todo esta correcto
    const succes = function (position) {
        // position - almacena la posicion
        let coordenadas = position.coords
        $geolocalizacion.innerHTML = 
        `<p>tu posicion actual es: </p>
        <ul>
            <li>latitud <br> ${coordenadas.latitude} </li>
            <li>longitude <br> ${coordenadas.longitude}</li>
            <li>Precisión <br> ${coordenadas.accuracy}</li>
        </ul>
        <a href="https://www.google.com/maps/@${coordenadas.latitude},${coordenadas.longitude},15z" target="_blank" rel="noopener">Ver mapa en google Maps</a>`
    }
    
    // error
    const error = function (error) {
        $geolocalizacion.innerHTML = `usted tiene un error: ${error}`
    };

    // API - de geolocalizacion
    navigator.geolocation.getCurrentPosition(succes, error, options)



}