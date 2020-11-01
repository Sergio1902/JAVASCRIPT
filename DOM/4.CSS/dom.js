/* ================================================== */
/* ============  ESTILOS CSS ============*/ 
/* ================================================== */

const $LINK_DOM = document.querySelector(".link-dom")

// solo obtiene los estilos asignados por el programador
console.log($LINK_DOM.getAttribute("style"))
// obtiene todos los estilos en un objeto map
console.log($LINK_DOM.style)
// propiedades internas de un atributo .
console.log($LINK_DOM.style.backgroundColor)

// ver los estilos directos desde el objeto windows
console.log(window.getComputedStyle($LINK_DOM))
// propiedades internas de un atributo .
console.log(window.getComputedStyle($LINK_DOM).getPropertyValue("background-color"))

// agregar nuevos estilos
$LINK_DOM.style.setProperty("text-decoration","none")
$LINK_DOM.style.setProperty("display","block")
$LINK_DOM.style.width = "50%"
$LINK_DOM.style.setProperty("text-align","center")
$LINK_DOM.style.padding ="20px"
$LINK_DOM.style.setProperty("border-radius","15px")
console.log($link)

/*/
recuerda el getPropertyValue solo se utliza con getComputedStyle
*/
/* ================================================== */
/* ============  VARIABLES CSS ============*/ 
/* ================================================== */

const $HTML = document.documentElement
const $BODY = document.body

let varDarkColor = window.getComputedStyle($HTML).getPropertyValue("--dark-color")
let varYellowColor = window.getComputedStyle($HTML).getPropertyValue("--yellow-color")

$BODY.style.color = varYellowColor
$BODY.style.background = varDarkColor

// modificar la variable css desde el DOM
$HTML.style.setProperty("--dark-color","pink")
varDarkColor = window.getComputedStyle($HTML).getPropertyValue("--dark-color")
$BODY.style.setProperty("background-color",varDarkColor)