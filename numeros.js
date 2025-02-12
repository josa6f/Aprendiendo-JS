//numeros aleatorios, la funcion Math.random llama a un numero aleatorio entre 0 y 1, este numero son decimales por ejemplo       0.1325845511

var numeroAleatorio = Math.random();

console.log(numeroAleatorio);
console.log(numeroAleatorio);

//Numeros enteros aleatorios, el metodo floor quita los decimales, aqui seria un numero entero entre 0 y 19

var numerosEnterosAleatorios = Math.floor(Math.random()*20);

console.log(numerosEnterosAleatorios);

//generar una funcion que genere un numero aleatorio entre 0 y 5

function numeroAleatorioE(limiteSuperior){
    return Math.floor(Math.random() * limiteSuperior);
}

for(var i = 0; i < 15; i ++){
    console.log(numeroAleatorioE(5));
}

//Numeros enteros aleatorios en un rango
function rangoAleatorio(limiteI, limiteS){
    return Math.floor(Math.random() * (limiteS - limiteI + 1)) + limiteI;
}

for(var i = 0; i < 15; i ++){
    console.log(rangoAleatorio(3,8));
}

//Funcion parseInt(), crea una cadena de caracteres en un numero

console.log(parseInt("5"));

var a = parseInt("12");
var b = parseInt("65");

console.log(a+b);

//cambiar cadena de caracteres a un numero binario a numero, primero se pone el numero binario y luego la base del numero binario que es 2

console.log(parseInt("11110000", 2));

//de hexadecimal a numero

console.log(parseInt("3E0A", 16));




