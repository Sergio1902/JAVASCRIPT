// sintaxis para importar
// import{nombre de la variable a importar} from 
// "dirección del archivo a importar";

import Saludar, {PI,usuario} from "./constantes.js"; 

import{restar} from "./aritmetica.js"

// importando el objeto con dos funciones
import{aritmetica} from "./aritmetica.js"

console.log(aritmetica.suma(4,5))


console.log("mi navegador no soporta ") 
console.log(PI)
console.log(usuario)

console.log(restar(7,3))

new Saludar()

/*
al importar un default tiene que salir de la destructuracion de las 
llaves 
*/
// saludar()
