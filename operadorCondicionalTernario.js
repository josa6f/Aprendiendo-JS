//Operador condicionale ternario ejemplo de lo que semplazara con el condicional ternario

// function retornarMinimo(x,y){
//     if(x < y){
//         return x;
//     }else{
//         return y;
//     }
// }
// se realiza la condicion x < y si se cumple (?) regresa x y sino (:) regresa y;
function retornarMinimo(x, y){
    return x < y ? x : y;
}

console.log(retornarMinimo(4, 7));
console.log(retornarMinimo(8, 2));
console.log(retornarMinimo(6, 6));


// otro ejemplo

var a = 5;
var b = 9;

console.log(a > b ? a + 2 : b * 3);


//Multiples Operadores condicionales

// function compararNumeros(a, b){
//     if(a == b){
//         return "a y b son iguales";
//     }else if(a > b){
//         return " a es mayor que b";
//     }else{
//         "b es mayor que a"
//     }
// }


function compararNumeros(a, b){
    return a == b ? "a y b son iguales"
        : a > b ? "a es mayor que b"
        : "b es mayor que a";
}

console.log(compararNumeros(10, 16));
console.log(compararNumeros(28, 16));
console.log(compararNumeros(10, 10));
