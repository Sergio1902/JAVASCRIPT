// arreglo del card
cardContent = [
    {   title: "PROBANDO01",
        img:"https://placeimg.com/200/200/tech"
    },
    {   title: "PROBANDO02",
        img:"https://placeimg.com/200/200/animals"
    },
    {   title: "PROBANDO03",
        img:"https://placeimg.com/200/200/arch"
    },
    {   title: "PROBANDO04",
        img:"https://placeimg.com/200/200/people"
    },
    {   title: "PROBANDO05",
        img:"https://placeimg.com/200/200/nature"
    }
]

const $CARDS = document.querySelector(".cards")
const $TEMPLATE = document.getElementById("template-card").content
const $FRAGMENTOS = document.createDocumentFragment()

$TEMPLATE.querySelector("figure").classList.add("card")

cardContent.forEach(element => {
    $TEMPLATE.querySelector("img").setAttribute("src", element.img)
    $TEMPLATE.querySelector("img").setAttribute("alt",element.title)
    $TEMPLATE.querySelector("figcaption").innerText = element.title

    let $CLON = document.importNode($TEMPLATE,true)
    $FRAGMENTOS.appendChild($CLON) 
});
$CARDS.appendChild($FRAGMENTOS)

















