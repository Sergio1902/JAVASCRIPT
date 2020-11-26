/* ================================================== */
/* ===========  AGREGANDO ELEMENTOS A UNA LISTA ==============*/ 
/* ================================================== */

const $body = document.body

const $section = document.createElement("section")
$body.appendChild($section)
$section.innerHTML = `
<h3>ESTACIONES DEL AÑO</h3>
<hr></hr>
`

// colocar las estaciones en una lista no ordenada

const ESTACIONES = ["verano","otoño","invierno","primavera"]

const $ul = document.createElement("ul")
$section.appendChild($ul)

ESTACIONES.forEach(function (el) {
    const $li = document.createElement("li")
    $li.textContent = el
    $ul.appendChild($li)
})

