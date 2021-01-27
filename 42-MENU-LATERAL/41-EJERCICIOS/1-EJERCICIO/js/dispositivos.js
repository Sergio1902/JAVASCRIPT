// permiten conocer la informacion del navegador 
let n = navigator
let ua = n.userAgent

export default function userDeviceInfo(id) {
    
    
    const $id = document.getElementById(id)

    const isMobile = {
        android: ()=> ua.match(/android/i),
        ios: ()=> ua.match(/iphone|ipad|ipod/i),
        windows: ()=> ua.match(/windows phone/i),
        any: function () {
            return this.android() || this.ios() || this.windows()
        }
    }
    const isDesktop = {
        linux: ()=> ua.match(/linux/i),
        mac: ()=> ua.match(/mac os/i),
        windows: ()=> ua.match(/windows nt/i),
        any: function () {
            return this.linux() || this.mac() || this.windows()
        }
    }
    const isBrowser = {
        chrome: ()=> ua.match(/chrome/i),
        safari: ()=> ua.match(/safari/i),
        firefox: ()=> ua.match(/firefox/i),
        opera: ()=> ua.match(/opera|opera mini/i),
        ie: ()=> ua.match(/msie|iemobile/i),
        edge: ()=> ua.match(/edge/i),
        any: function () {
            return (this.ie() ||
                    this.edge() ||
                    this.chrome() ||
                    this.safari() ||
                    this.firefox() ||
                    this.opera()
                    )
        }
    }
    // imprimir
    $id.innerHTML = `
    <ul>
        <li>user Agent : ${ua}</li>
        <li>Plataforma : ${isMobile.any() ?isMobile.any() :isDesktop.any()}  </li>
        <li>Navegador : ${isBrowser.any()}  </li>
    </ul>`

    // mostrar contenido general 
    if(isBrowser.chrome()){
        $id.innerHTML += `ESTE CONTENIDO SOLO SE VE EN CHROME`
    }
    if(isBrowser.edge()){
        $id.innerHTML += `ESTE CONTENIDO SOLO SE VE EN EDGE`
    }
    
    // validaciones para descargas
    if(isDesktop.windows()){
        $id.innerHTML += `<p>esta descarga solo es para chrome</p>`
    }

}
