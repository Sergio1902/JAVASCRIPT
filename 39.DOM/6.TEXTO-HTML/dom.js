/* ================================================== */
/* ============  TEXTO - HTML ============*/ 
/* ================================================== */

const $whatIsDOM = document.getElementById("quees")

let text = `<p>El Modelo de Objetos del Documento (<b><i>DOM-Documento Object Model</i></b>) es un API para documentos HTML - XML
<p>Este provee una respresentacion extructural del documento permitiendo modificar su contenido y presentacion visual mediante codigo JS</p>
<p>
<mark>El DOM no es parte de la especificación de JS, es una API para los navegadores</mark></p>`

// ninguna respeta el codigo HTML

// respeta los espacios y saltos de linea
    // $whatIsDOM.innerText = text
// no respeta saltos de linea
    // $whatIsDOM.textContent = text

// respeta formato HTML y agrega las nuevas etiquetas HTML respetando la etiqueta principal
    // $whatIsDOM.innerHTML = text

// remplaza totalmente la nueva etiqueta HTML en vez de la asignada
$whatIsDOM.outerHTML = text




