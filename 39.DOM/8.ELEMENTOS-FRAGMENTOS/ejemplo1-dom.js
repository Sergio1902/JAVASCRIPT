/* ================================================== */
/* ===========  ELEMENTOS Y FRAGMENTOS ==============*/ 
/* ================================================== */

// agregar elementos desde el DOM - (etiquetas)

const $figure = document.createElement("figure")
const $img = document.createElement("img")
const $figcaption = document.createElement("figcaption")

// texto del figcaption
const $textfigcaption = document.createTextNode("Animals")

// section padre
const $padre = document.querySelector(".cards")

// agregar etiquetas internaas al figure
$img.setAttribute("src","https://placeimg.com/200/200/tech")
$img.setAttribute("alt","HOLA")
$figure.appendChild($img)
$figure.appendChild($figcaption)
$figcaption.appendChild($textfigcaption)

// agregar clase a la etiqueta figure
$figure.classList.add("card")

$padre.appendChild($figure)

