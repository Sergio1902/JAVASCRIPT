// no confundir elemento html con nodos
// nodos de tipo elemento -> etiqueta propia del html

/*
traer las etiquetas a traves del nombre ("nombre especifico")
*/
console.log(document.getElementsByTagName("li"))
/*
traer las etiquetas a traves del nombre de la clase ("nombre especifico")
*/
console.log(document.getElementsByClassName("card"))
/*
obtener a traves del nombre - mayormente en input y formularios ("nombre especifico")
*/
console.log(document.getElementsByName("nombre"))
/*
obtener a traves del id - mayormente en input y formularios ("nombre especifico")
*/
console.log(document.getElementById("quees"))

/*
actualmente utilizado
recuerda que tienes que indicarle si es un ID o CLASS
solo te devuelve el primer elemento encontrdo

para todos funciona el metodo length

*/
console.log(document.querySelector(".card"))

console.log(document.querySelectorAll("a"))

/* node list - html colection 
    se puede iterar con foreach
    o se puede indicar el indice especial a traves de
    corchetes
*/
let indice = document.querySelectorAll(".card")[2]
console.log(indice)

// etiquetas html descendiente
console.log(document.querySelectorAll(".cards .card"))