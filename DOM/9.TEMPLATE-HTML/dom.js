/* ================================================== */
/* =============  TEMPLATE HTML =====================*/ 
/* ================================================== */

// estas etiquetas no se visualizan, solo en consola

const $cards = document.querySelector(".cards")

// ingresar al contenido de la etiqueta template
// content - necesario para poder viasualizarlo en la consola
const $template = document.getElementById("template-card").content

const $fragment = document.createDocumentFragment()


// arreglo del card
cardContent = [
    {   title: "Tecnología",
        img:"https://placeimg.com/200/200/tech"
    },
    {   title: "Animales",
        img:"https://placeimg.com/200/200/animals"
    },
    {   title: "Arquitectura",
        img:"https://placeimg.com/200/200/arch"
    },
    {   title: "Gente",
        img:"https://placeimg.com/200/200/people"
    },
    {   title: "Naturaleza",
        img:"https://placeimg.com/200/200/nature"
    }
]

cardContent.forEach(element => {

    // seleccionar a la img y figcaption y le agrega atributos
    $template.querySelector("img").setAttribute("src",element.img)
    $template.querySelector("img").setAttribute("alt",element.title)
    $template.querySelector("figcaption").textContent = element.title

    // crear un clon del template - creado para agregar 
    let $clon = document.importNode($template,true)
    $fragment.appendChild($clon)
});

$cards.appendChild($fragment)

