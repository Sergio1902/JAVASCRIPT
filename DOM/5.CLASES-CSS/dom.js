/* ================================================== */
/* ============  CLASES CSS ============*/ 
/* ================================================== */

const $CARD = document.querySelector(".card")

console.log($CARD)
// obtener el nombre de la clase
console.log($CARD.className)
// devuelve un arreglo DOMtokenList donde muestra las clases encontradas
console.log($CARD.classList)

// para buscar una clase en particular utilizando el classList ".contains" - devuelve true or false
console.log($CARD.classList.contains("ob"))
// agregar una clase utilizando classList una o varias clases
$CARD.classList.add("rotate-45")
$CARD.classList.add("clase-prueba2","clase-prueba")
// imprimir todas las clases 
console.log($CARD.classList)
// eliminar las clases una o varias a la vez
$CARD.classList.remove("ob")
$CARD.classList.remove("clase-prueba2","clase-prueba")
// agregar o quitar la clase si la tuviera o no
// si ejecuta mas de una vez va a gregando y quitando la clase
$CARD.classList.toggle("ob")
$CARD.classList.toggle("ob")

// remplazar una clase por otra
$CARD.classList.replace("rotate-45","rotate-135")
