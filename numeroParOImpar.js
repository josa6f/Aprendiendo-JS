function tipoDeNumero(valor) {
    if (valor % 2 == 0) {
        console.log("Numero Par");
    }
    else if (valor % 2 == 1) {
        console.log("Numero Impar");
    }
    else{
        console.log("Float");
    }
}

tipoDeNumero(10);
tipoDeNumero(9);
tipoDeNumero(9.5);