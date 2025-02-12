function cFinal(calificacion) {
    if (calificacion <= 7) {
        console.log("Reprobado");
    }
    else if((calificacion >= 8) || (calificacion <= 10)){
        console.log("Aprobado");
    }
}

cFinal(9);
cFinal(7);