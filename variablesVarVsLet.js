// variable con var - puede ser global o local(dentro de una funcion), se puede declarar una variable con el mismo nombre mas de una vez

var jugador = "josa";
var jugador = "ivan";

console.log(jugador); // muestra ivan



//variable con let - solo se ocupa en el bloque de codigo, no se puede declarar una variable con el mismo nombre mas de una vez

// let jugador = "josa";
// let jugador = "ivan";

// console.log(jugador); // muestra error, de que la variable ya ha sido declarada, 

//ahora solo se puede volver a reasignar el valor

let jugadores = "erick";
jugadores = "pako";

console.log(jugadores); //muestra pako


//variable const no se puede cambiar el valor de la cosntante y se debe de inicializar con un valor

const MI_CONSTANTE = 6;

console.log(MI_CONSTANTE);

//funcion usando una constante - ** es elevar al exponente

function calcularAreaCirculo(radio){
    const PI = 3.1416;
    if(radio < 0){
        return undefined;
    }
    return PI * (radio ** 2);
}

//Mutar arreglos declarados con const

const Mi_ARREGLO = [1,2,3,4];

console.log(Mi_ARREGLO);

Mi_ARREGLO[0] = 5;
Mi_ARREGLO[1] = 10;
Mi_ARREGLO[2] = 15;
Mi_ARREGLO[3] = 20;

console.log(Mi_ARREGLO);


//Crear un Objeto Inmutable

let colores = {
    "verde": "#10e04b",
    "azul": "#1b50e0",
    "negro": "#000000",
    "blanco": "#ffffff"
};

console.log(colores);

Object.freeze(colores); // con esto se se congela el objeto

colores.verde = "345sg5"; // se intento modificar la propiedad 

delete colores.verde; // Se intento borrar la propiedad

console.log(colores);


