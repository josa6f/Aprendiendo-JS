function bajaAlta(arreglo, elemento){
    arreglo.push(elemento);
    return arreglo.shift();
}

var miArreglo = [10, 20, 30, 40, 50];

console.log("Antes " + JSON.stringify(miArreglo));

console.log(bajaAlta(miArreglo, 60));

console.log("Despues " + JSON.stringify(miArreglo));

// Metodos de arreglos
// push - pone un elemento al final del arreglo
// pop - quita un elemento al final del arreglo y lo puede retornar
// shift - quita el primer elemento de un arreglo y lo puede retornar
// unshift - pone un elemento al principio de un arreglo

