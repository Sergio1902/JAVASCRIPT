console.log(history)
// saber cuantas paginas hemos visitado - historial
console.log(history.length)
// linea de tiempo del historial (#)
history.back(3)     //ir atras
history.forward(2)  //ir adelante

history.go(1)       //te lleva a la pagina del historial


console.log("::::::::::::: OBJETO NAVEGADOR :::::::::::::")
console.log(navigator)
// informacion de la conexion del usuario
console.log(navigator.connection)

console.log(navigator.geolocation)
// dispositivos del usuario
console.log(navigator.mediaDevices)
// tipos de formatos que soportan los navegadores
console.log(navigator.mimeTypes)
// eventos para ver si hay o no conexion
console.log(navigator.onLine)
// sitio web a una aplicacion instalable
console.log(navigator.serviceWorker)
// almacenamiento
console.log(navigator.storage)
// detecta dispositivos usb
console.log(navigator.usb)
// informacion sobre el navegador y el computador
console.log(navigator.userAgent)
