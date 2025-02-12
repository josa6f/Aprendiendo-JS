//nos permite asignar las propiedades de un objeto a variables

const usuario = {
    nombre: "Gino Smith",
    edad: 34
};

//const nombre = usuario.nombre;
//const edad = usuario.edad;

//Esto remplaza a las dos lineas de arriba

const {nombre, edad} = usuario;


//otro ejemplo

var coordenada = {
    x1: 4,
    y1: 6,
    z1: 12
};


const {x1, y1, z1} = coordenada;


// Sintaxis de desestructuracion: Objetos Anidados

const user1 = {
    johnDoe:{
        age: 27,
        email: "johnDoe@freecodecamp.com"
    }
};


const {johnDoe: {age, email}} = user1;
//const {johnDoe: {age: edadDelUsuario, email: correoDelUsuario}} = user1; en cada propiedad se le asigna un nuevo nombre de variable a la propiedad y lo mandarias a llamar console.log(edadDelUsuario);

console.log(age);
console.log(email);


//otro ejemplo

const PRONOSTICO_LOCAL = {
    "ayer": {
        min: 61,
        max: 75
    },
    "hoy":{
        min: 64,
        max: 77
    },
    "mañana":{
        min: 68,
        max: 80
    }
};


//const minimoHoy = PRONOSTICO_LOCAL.hoy.min; asi se ingresaria al valor de minimo del dia de hoy

const {hoy:{min: minimaDeHoy,max: maximaDeHoy}} = PRONOSTICO_LOCAL;

console.log(minimaDeHoy, maximaDeHoy);

