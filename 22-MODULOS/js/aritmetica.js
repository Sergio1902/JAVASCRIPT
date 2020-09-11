export function suma(a,b) {
    return a+b
}

export function restar(a,b) {
    return a-b
}

/*
    se puede exportar funciones dentro de un objeto 
    respetando la sintaxis de funcion dentro de objeto 
*/
export const aritmetica = {
    suma : suma,
    restar:restar
}






