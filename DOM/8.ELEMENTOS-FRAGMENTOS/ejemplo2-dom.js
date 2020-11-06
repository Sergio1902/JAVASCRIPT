/* ================================================== */
/* ===========  ELEMENTOS Y FRAGMENTOS ==============*/ 
/* ================================================== */

// obtener etiqueta padre
const $padre = document.querySelector(".cards")
const $figure = document.createElement("figure")
$figure.innerHTML = `<img src="https://placeimg.com/200/200/animals" alt="texh">
<figcaption>Animals</figcaption>`

$figure.classList.add("card")
$padre.appendChild($figure)


