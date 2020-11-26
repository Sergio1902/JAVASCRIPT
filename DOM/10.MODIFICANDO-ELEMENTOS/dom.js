// la seccion padre de la cual vamos a modificar
const $cards = document.querySelector(".cards")

// la nueva tarjeta creada
const $newCard = document.createElement("figure")

// contenido de la tarjeta
$newCard.innerHTML = `
<img src="https://placeimg.com/200/200/any" alt="Any">
<figcaption>Any</figcaption>
`

// agregando la clase a cada figure
$newCard.classList.add("card")


// remplazar la nueva tarjeta por algun hijo de la seccion padre
// $cards.replaceChild($newCard,$cards.children[2])

// insertar un hijo antes de otro 
// $cards.insertBefore($newCard,$cards.children[0])

// remover un hijo en particular
// $cards.removeChild($cards.children[1])


// :::::::::::::::: CLONACION ::::::::::::::::::::::

// cloneNode - requiere Boolean
// true genera un clon con todo y contenido
// flase genera un clon solo esqueleto
const $CLON_NODE = $cards.cloneNode(true)

document.body.appendChild($CLON_NODE)





