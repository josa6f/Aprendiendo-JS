//Permite escribir funciones versatiles, este operador te permite pasar cualquier numero de argumento a una funcion  y que esos argumentos se agrupen como un arreglo

function miFuncio(...arg){
    console.log(arg);
}

miFuncio(1);
miFuncio(1,2,3);
miFuncio([1,2,3],[4,5,6]);


//tambein se puede usar la funcion Lenght, para conocer la longitud del arreglo

function miFuncioUno(...args){
    console.log(args.length);
}

miFuncioUno(1); // la longitud es de 1
miFuncioUno(1,2,3); // la longitud es de 2
miFuncioUno([1,2,3],[4,5,6]); //la longitud es de 2 arreglos


//otro ejemplos con el metodo reduce, con estos argumentos suma los elementos del arreglo y retorna el resultado

const suma = (...args) => {
    return args.reduce((a,b) => a + b, 0);
};