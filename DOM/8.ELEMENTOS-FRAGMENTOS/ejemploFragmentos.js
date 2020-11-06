/* ================================================== */
/* =================  FRAGMENTOS =====================*/ 
/* ================================================== */

const $body = document.body
const $section = document.createElement("section")
const $ul = document.createElement("ul")

// crear un fragmento del document
const $fragmentoMeses = document.createDocumentFragment()

$body.appendChild($section)

$section.innerHTML = `
<h3> MESES DEL AÑOS </h3>
<hr></hr>
`
const MESES = ["enero","febrero","marzo","abril","mayo","junio"]

MESES.forEach(function (el) {
    const $li = document.createElement("li")
    $li.textContent = el
    // almacena cada li dentro del fragmento
    $fragmentoMeses.appendChild($li)
})

// una sola insercion al DOM
$ul.appendChild($fragmentoMeses)
$section.appendChild($ul)



