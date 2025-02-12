//arrow fuction son funciones mas compactas, que normalmente se ocupan cuando se necesitan escribir funciones anonimas, las funciones anonimas son funciones que no tienen un nombre especifico

// ejemplo
// const fecha = function(){
//     return new Date();
// };

const fecha = () => new Data();


//Funciones flecha con parametros

// ejemplo
// const sumarTres = function(x){
//     return x + 3;
// };

const sumarTres = (x) => x + 3;

console.log(sumarTres(10));


// otro ejemplo contatenando arreglos

// const concantenerArreglos = function(arre1, arre2){
//     return arre1.concat(arre2);
// };

// console.log(concantenerArreglos([1,2],[3,4,5]));


const concantenerArreglos = (arre1, arre2) => arre1.concat(arre2);


console.log(concantenerArreglos([10,20],[30,40,50]));



//otro ejemplo cuando tiene mas de una linea la funcion

// const sumar = function(a,b){
//     let num = 6;
//     return a + b + num;
// }

const sumar = (a,b) => {
    let num = 6;
    return a + b + num;
};


console.log(sumar(10,3));



//Valores por defecto para parametros, se le asigna al valor = 1 por si no se le asigna ningun parametro

const incrementar = (num, valor = 1) => num + valor; 

console.log(incrementar(5)); // devuelve 6
console.log(incrementar(5, 3)); // devuelve 8



