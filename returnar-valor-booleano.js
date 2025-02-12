function esMenorQue(a,b){
    return a < b;
}

console.log(esMenorQue(3,6));
console.log(esMenorQue(4,2));

//Patron de retorno anticipado
function miFuncion() {
    console.log("Hola");
    return "mundo";
    console.log("Adios"); // las sentencias despues de el return ya no se ejecutan
}


function calcularRaizCuadrada(num) {
    if(num < 0){
        return undefined;
    }
    return Math.sqrt(num);
}

console.log(calcularRaizCuadrada(81));
console.log(calcularRaizCuadrada(-8));