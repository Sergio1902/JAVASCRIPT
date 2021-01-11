export default function contentResponsive(id, mq, contentMobile, contentDestok) {
    
    // obtener la media query - utilizando windows
    let breakPoint = window.matchMedia(mq)

    // funcion expresada
    const responsive = function (e) {
        if(e.matches){
            document.getElementById(id).innerHTML = contentMobile
        }else{
            document.getElementById(id).innerHTML = contentDestok
        }
    }
// add listener - utilizado solo en medias querys
        breakPoint.addListener(responsive)

}