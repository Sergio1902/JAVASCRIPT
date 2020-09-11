// agregar EXPORT a la variable que vamos a exportar
export const PI = Math.PI

export let usuario = "sergio"
export let password = "123"


// export default - solo se puede utlizar una vez 
/*    
    recuerda solo se puede exportar por defecto 
    las clases y funciones 
*/

// export default function saludar() {
//     console.log("HOLA MODULOS *ES6")
// }

export default class Saludar{
    constructor(){
        console.log("HOLA SOY EL METODO SALUDAR")
    }
}

/*
    exportar por defecto CONST O VARIABLES 
    siguiente sintaxis
*/
let nombre = "JOSE"
// export default nombre