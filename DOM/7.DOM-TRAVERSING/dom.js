/* ================================================== */
/* ===========  RECORRIENDO EL DOM TRANVERSING ======*/ 
/* ================================================== */

// solo se utilizan para recorrer ELEMENTOS        

const $CARDS = document.querySelector(".cards")

// visualizar los hijos
console.log($CARDS.children)
// visualizar un hijo segun la posicion 
console.log($CARDS.children[4])
// visualizar al padre directo
console.log($CARDS.parentElement)
// el primer y ultimo hijo
console.log($CARDS.firstElementChild)
console.log($CARDS.lastElementChild)

// visualizar al hermano anterior
console.log($CARDS.previousElementSibling)
// visualizar el hermano posterior
console.log($CARDS.nextElementSibling)

// visualizar y verificar el ancestro mas cercano
console.log($CARDS.children[3].closest("section"))

