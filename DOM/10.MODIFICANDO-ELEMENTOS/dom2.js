/*
.insertAdjacent
    .insertAdjacentElement(position, elemento)
    .insertAdjacentHTML(position, HTML)
    .insertAdjacentText(position, text)

posiciones
    beforebegin (hermano anterior)
    afterbegin  (primer hijo)
    beforeend   (ultimo hijo)
    afterend    (hermano siguiente)
*/

// la seccion padre de la cual vamos a modificar
const $cards = document.querySelector(".cards")
// la nueva tarjeta creada
const $newCard = document.createElement("figure")
// contenido de la tarjeta
let $contentCard = `
<img src="https://placeimg.com/200/200/any" alt="Any">
<figcaption></figcaption>
`
// agregando la clase a cada figure
$newCard.classList.add("card")

// cambios
// $cards.insertAdjacentElement("beforebegin",$newCard)
// $cards.insertAdjacentElement("afterbegin",$newCard)
// $cards.insertAdjacentElement("beforeend",$newCard)
// $cards.insertAdjacentElement("afterend",$newCard)

// agregar codigo html 
// $newCard.insertAdjacentHTML("beforeend",$contentCard)
// $newCard.querySelector("figcaption").insertAdjacentText("afterbegin","Any")

// $cards.insertAdjacentElement("afterbegin",$newCard)

// nuevos metodos 
// $cards.prepend($newCard)
// $cards.append($newCard)
// $cards.before($newCard)
// $cards.after($newCard)

