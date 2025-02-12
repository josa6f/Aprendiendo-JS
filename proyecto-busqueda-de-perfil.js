var contactos = [
    {
        "nombre": "Nora",
        "apellido": "Nav",
        "numero": "0543236543",
        "gusto": ["Pizza", "Programacion"]
    },
    {
        "nombre": "Harry",
        "apellido": "Potter",
        "numero": "0994372684",
        "gusto": ["Hogwarts", "Magia"]
    },
    {
        "nombre": "Sherlock",
        "apellido": "Holmes",
        "numero": "0487345643",
        "gusto": ["Casos interesantes", "violin"]
    }
];

function buscarPerfil(nombre, propiedad){
    for(var i = 0; i < contactos.length; i++){
        if(contactos[i].nombre === nombre){
            return contactos[i][propiedad] || "La propiedad no existe";
        }
    }
    return "El contaco no esta en la lista de contactos";
}

console.log(buscarPerfil("Nora", "gusto"));
console.log(buscarPerfil("Harry", "edad"));
console.log(buscarPerfil("Luis", "gusto"));
console.log(buscarPerfil("Sherlock", "apellido"));