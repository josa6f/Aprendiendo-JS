var miPerro = {
    nombre: "tobi",
    edad: "2",
    peso: "9",
    raza: "pug",
};

//notacion de punto, es la coneccion para entrar al valor del objeto

console.log(miPerro.nombre);
console.log(miPerro.edad);
console.log(miPerro.peso);
console.log(miPerro.raza);

//notacion de corchetes, para acceder a valores del objeto que su caracteristicas esten nombrados con espacios
var player = {
    "nombre del jugador": "josa",
    "numero del jugador": "6",
    "posicion del jugador": "WR",
};

console.log(player["nombre del jugador"]);
console.log(player["numero del jugador"]);
console.log(player["posicion del jugador"]);

//ingresar a las propiedades del objeto usando una variable

var resultados = {
    1: "usuario1",
    2: "usuario2",
    3: "usuario3",
    4: "usuario4",
};

var lugar = 2;

console.log(resultados[lugar]);

//cambiar las propiedades 

var mochila = {
    "color": "azul",
    "tamaño": "mediano",
    "contenido": ["botella de agua", "cuaderno", "tijeras"],
};

console.log(mochila.color); //azul
console.log(mochila.color = "verde"); //verde, tambien aqui se puede cambiar el arreglo por completo mochila.contenido = []
mochila.contenido.push("lapiz"); //agregar lapiz al arreglo
console.log(mochila.contenido); 

//agregar nuevas propiedades a un objeto

var curso = {
    "titulo": "aprende javascript desde cero",
    "idioma": "Español",
    "duracion": 30,
};
console.log(curso);

curso.vistas = 34500; // el objeto, la nueva propiedad y el valor, tambien puede ser asi curso["vistas"] = 34500; 



console.log(curso.vistas);


//Eliminar propiedad

delete curso.duracion;

console.log(curso);

// Objetos para busqueda
function buscarElementoQuimico(simbolo){
    var simbolosQuimicos = {
        "Al": "Aluminio",
        "S": "Azufre",
        "Cl": "Cloro",
        "He": "Helio",
        "B": "Boro",
        "Li": "Litio"
    };
    return simbolosQuimicos[simbolo];
}

console.log(buscarElementoQuimico("Al"));
console.log(buscarElementoQuimico("S"));
console.log(buscarElementoQuimico("Cl"));
console.log(buscarElementoQuimico("He"));
console.log(buscarElementoQuimico("B"));
console.log(buscarElementoQuimico("Li"));

//Verificar propiedades del objeto con la propiedad hasOwnProperty
var miCuaderno = {
    "color": "verde",
    "categoria": 3,
    "precio": 4.56
};

console.log(miCuaderno.hasOwnProperty("color")); //true
console.log(miCuaderno.hasOwnProperty("pais")); //false

//creamos una funcion para verificar si el objeto tiene la propiedad

function verificarPropiedad(obj, propiedad) {
    if(obj.hasOwnProperty(propiedad)){
        return "Propiedad: " + obj[propiedad];
    }
    else{
        return "El objeto no tiene esta propiedad";
    }
}

console.log(verificarPropiedad(miCuaderno, "color"));
console.log(verificarPropiedad(miCuaderno, "origen"));

//Objetos complejos

var ordenesDePizza = [
    {
        "tipo": "margarita",
        "tamaño":"individual",
        "precio": 5.67,
        "toppings": [
            "extra queso",
            "champiñones",
            "piña"
        ],
        "paraLlevar": true
    },
    {
        "tipo": "cuatro quesos",
        "tamaño": "familiar",
        "precio": 18.34,
        "toppings": [
            "extra queso",
            "pimiento"
        ],
        "paraLlevar": false
    },
    {
        "tipo": "napolitana",
        "tamaño": "individual",
        "precio": "6.78",
        "toppings": [],
        "paraLlevar": true
    }
];

console.log(ordenesDePizza[0]);
console.log(ordenesDePizza[1]);
console.log(ordenesDePizza[0].tipo); //console.log(ordenesDePizza[0].["tipo"]); se ingresa al objeto y despues a la propiedad
console.log(ordenesDePizza[2]);


//Objetos anidados

var miReceta = {
    "descripcion": "mi postre favorito",
    "costo": 15.6,
    "ingredientes":{
        "masa": {
            "harina": "100 grs",
            "sal": "1 cuchadara",
            "agua": "1 taza"
        },
        "cobertura": {
            "azucar": "120 grs",
            "chocolate": "4 cucharadas",
            "mantequilla": "200grs"
        }
    }
};

console.log(miReceta.descripcion); //entrar a las propiedades
console.log(miReceta.costo); //entrar a las propiedades
console.log(miReceta.ingredientes); //entrar a las propiedades
console.log(miReceta.ingredientes.masa); //entrar al objeto de la propiedad
console.log(miReceta.ingredientes.masa.agua); //entrar a una propiedad del objeto anidado
console.log(miReceta.ingredientes.cobertura);
console.log(miReceta.ingredientes.cobertura.azucar);

//Arreglos anidados
var misPlantas = [
    {
        tipo: "flores",
        lista: [
            "rosas",
            "tulipanes",
            "dientes de leon"
        ]
    },
    {
        tipo: "arboles",
        lista: [
            "abeto",
            "pino",
            "abedul"
        ]
    }
];

var miPrimeraPlanta = misPlantas[0].lista[0];

var miSegundaPlanta = misPlantas[1].lista[1];

console.log(miPrimeraPlanta);
console.log(miSegundaPlanta);

//Coleccion de discos - Proyecto

var coleccionDeDiscos = {
    7853: {
        tituloDelAlbum: "Bee Gees Greatest",
        artista: "Bee Gees",
        canciones: [
            "Stayin",
            "Alive"
        ]
    },
    5439: {
        tituloDelAlbum: "ABBA Gold"
    }
};

function actualizarDiscos(discos, id, propiedad, valor) {
    if(valor === ""){
        delete discos[id][propiedad];
    }else if(propiedad === "canciones"){
        discos[id][propiedad] = discos[id][propiedad] || [];
        discos[id][propiedad].push(valor);
    }else{
        discos[id][propiedad] = valor;
    }
}

console.log(coleccionDeDiscos[7853].tituloDelAlbum);

actualizarDiscos(coleccionDeDiscos, 7853, "tituloDelAlbum", "");

console.log(coleccionDeDiscos[7853].tituloDelAlbum);


console.log(coleccionDeDiscos[5439].tituloDelAlbum);

actualizarDiscos(coleccionDeDiscos, 5439, "canciones", "Mamamia");

console.log(coleccionDeDiscos[5439].canciones);