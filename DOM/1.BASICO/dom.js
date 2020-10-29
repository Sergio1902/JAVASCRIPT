console.log("===== Elementos del Documento ======")
        console.log(document.head)
        console.log(document.body)
        // mostrar el documento HTML completo
        console.log(document.documentElement)

        console.log(document.charset)
        console.log(document.doctype)
        console.log(document.title)

        // devolver etiquetas - devuelve un COLECCION HTML
        console.log(document.links)
        console.log(document.forms)
        console.log(document.images)
        console.log(document.scripts)
        console.log(document.styleSheets)

        // para mostrar un elemento seleccionado del DOM
        setTimeout(() => {
            console.log(document.getSelection().toString())
        }, 3000);

        // esribir codigo html desde el dom
        document.write(`<h2>HOLAAAAA SERGIOOOOO<h2>`)