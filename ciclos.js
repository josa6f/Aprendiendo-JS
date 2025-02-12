//ciclo, bucle o loop While, se usan cuando no tenemos un numero de iteraciones
var numero = 0;
while(numero <= 10){
    multiplicacion = numero * 5;
console.log("5 * " + numero +  " Es igual a  " + multiplicacion);
    numero++;
}

// agregar valores a un arreglos
var miArreglo = [];
var i = 0;

console.log(miArreglo);

while(i < 10){
    miArreglo.push(i);
    i++;
}

console.log(miArreglo);

// quitar valores de un arreglo

var numeros = [2, 3, 4, 5, 6, 8, 9, 10];

while (numeros.length > 4) {
    numeros.pop();
}

console.log(numeros);

//ciclo for

var segundoArreglo = [];
//variable del ciclo, condicion del ciclo, como se actualizara el valor
for(var i = 0; i < 100; i = i + 5){
    segundoArreglo.push(i);
}

console.log(segundoArreglo);

//numeros inpares
var numeroImpar = [];

for(var i = 1; i < 20; i = i + 2){
    numeroImpar.push(i);
}

console.log("Los numeros impares son " + numeroImpar);


//Numeros pares

var numerosPares = [];

for(nPar = 0; nPar < 30; nPar = nPar + 2){
    numerosPares.push(nPar);
}

console.log("Los numeros pares son " + numerosPares);


//ciclo for contar hacia atras
for(var i = 15; i >= 10; i -= 2){
    console.log(i);
}


var tercerArreglo = [];

for(var r = 10; r > 0; r -=2){
    tercerArreglo.push(r);
}

console.log(tercerArreglo);

//iterar (obtener cada uno de los arreglos y utilizarlos en el ciclo) sobre un arreglo con un ciclo for, hace la suma del arreglo

var cuartoArreglo = [10, 5, 8, 12];

var total = 0;

for(var i = 0; i < cuartoArreglo.length; i++){
    total += cuartoArreglo[i];
}

console.log(total);

//convierte en mayusculas los valores del arreglo

var lenguajes = ["JavaScript", "Python", "Java", "C++"];

for(var i = 0; i < lenguajes.length; i++){
    console.log(lenguajes[i].toUpperCase());
}


//cuenta los numeros pares del arreglo

var quitoArreglo = [5,2,6,3,7,5,6,3];

function contarNumerosPares(arreglo){
    var total = 0;

    for(var i = 0; i < arreglo.length; i++){
        if(arreglo[i] % 2 == 0){
            total++;
        }
    }
    return total;
}

console.log(contarNumerosPares(quitoArreglo));


//ciclos for anidados

var sextoArreglo = [[1,2,3],[4,5,6],[7,8,9]];

for(var i = 0; i < sextoArreglo.length; i++){
    console.log(">Nueva interacion");
    var arregloAnidado = sextoArreglo[i]; 

    for(var j = 0; j < arregloAnidado.length; j++){
        console.log(">>Ciclo anidado");
        console.log("Elemento: " + arregloAnidado[j]);
        console.log(arregloAnidado[i]);
    }
}


//Ciclo do while, el codigo se ejecuta antes de evaluar la condicion

var x = 5;

do{
    console.log(x);
    x++;
}while(x < 10);

