// Este operador hace lo contrario al operador rest, este operador toma un arreglo y lo descompone en su elementos individuales solo que este se ocupa en la llamada a la funcion y el rest en los parametros de la funcion

const num = [1, 2, 3];

function sum(x, y, z){
    return x + y + z
}

//sumar(numeros[0], numeros[1], numeros[2]); en lugar de escribir EventSource, utilizamos el operador rest

console.log(sum(...num));