function clasificarValor(valor) {
    var respuesta;
    switch (valor) {
        case 1: // el valor del caso tambien puede ser una cadena "hamburguesa"
            respuesta = "Alpha";
            break;
        case 2:
            respuesta = "Beta";
            break;
        case 3:
            respuesta = "Gamma";
            break;
        case 4:
            respuesta = "Delta";
            break;
    }
    return respuesta;
}

console.log(clasificarValor(1));
console.log(clasificarValor(2));
console.log(clasificarValor(3));
console.log(clasificarValor(4));

//Switch con default

function seleccionarIdioma(v) {
    var idioma;
    switch (v) {
        case 1:
            idioma = "Ingles";
            break;
        case 2:
            idioma = "Chino";
            break;
        case 3:
            idioma = "Frances";
            break;
        default: // es como el else del switch
            idioma = "Coreano";
            break;
    }
    return idioma;
}

console.log(seleccionarIdioma(1));
console.log(seleccionarIdioma(2));
console.log(seleccionarIdioma(3));
console.log(seleccionarIdioma(4));

//Switch con multiples caso

function nivelDeVolumen(vol) {
    var volumen;
    switch(vol){
        case 1:
            volumen = "Volumen Bajo";
            break;
        case 2:
        case 3:
            volumen = "Volumen Intermedio";
            break;
        case 4:
            volumen = "Volumen Alto";
            break;
    }
    return volumen;
}

console.log(nivelDeVolumen(1));
console.log(nivelDeVolumen(2));
console.log(nivelDeVolumen(3));
console.log(nivelDeVolumen(4));