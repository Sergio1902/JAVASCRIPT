
/* ================================================== */
/* ==================  ATRIBUTOS ====================*/ 
/* ================================================== */

// obtener el valor de los atributos

// 1era forma - todo el documento html - name atributo
    console.log(document.documentElement.lang)
// 2da forma
    console.log(document.querySelector(".cards .card").getAttribute("data-description"))
    const $link = document.querySelector(".link-dom").getAttribute("href")
    console.log($link)


// asignar un nuevo valor a los atributos

// 1era forma

    const $quees = document.querySelector("#quees")
    $quees.setAttribute("class","parrafo")
    console.log($quees)   

    document.documentElement.lang = "es"
    console.log(document.documentElement.lang)

// 2da forma - setAttribute (atributo a cambiar, nuevo valor)
    // se puede cambiar un valor existente 
        
    document.documentElement.setAttribute("lang","PERU")
    console.log(document.documentElement.getAttribute("lang"))

    // agregar un nuevo atributo
    const $LINK = document.querySelector(".link-dom")
    $LINK.setAttribute("target","_blank")

    /*
    dato --> para evitar el hack en otra pestaña
    rel = "noopener"
    */
    // $LINK.setAttribute("rel","noopener")
    // console.log($LINK)

// eliminar atributo - buscar atributo
    // console.log($LINK.hasAttribute("href"))
    // $LINK.removeAttribute("rel")

/* ================================================== */
/* ==================  DATA ATRIBUTOS ====================*/ 
/* ================================================== */

    const $CARD = document.querySelector(".card") 
    console.log($CARD.getAttribute("data-description"))

    $CARD.setAttribute("data-description","HOLAAA")
    console.log($CARD)

/*
existe un archivo MAP donde almacena los
data-description -- DATASET
*/
// console.log($CARD.dataset.description)
// console.log($CARD.hasAttribute("data-description"))



