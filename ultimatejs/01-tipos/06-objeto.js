//Personaje de TV

let nombre = "Tanjiro Kamado";
let anime = "Demon Slayer";
let edad = 16;

// OBJETO literal usando "{}"
let personaje = {};

// Par llave-valor "llave : valor"
personaje = {
    nombre: "Tanjiro Kamado",
    anime: "Demon Slayer",
    edad: 16,
};

console.log("\nImprimiendo el objeto personaje");
console.log(personaje);

// Accediendo a las propiedades del objeto por punto
console.log("\nImprimiendo las propiedades del objeto personaje con punto");
console.log(personaje.nombre);
console.log(personaje.anime);
console.log(personaje.edad);

// Accediendo a las propiedades del objeto por corchetes
console.log("\nImprimiendo las propiedades del objeto personaje con corchetes");
console.log(personaje['nombre']);
console.log(personaje['anime']);
console.log(personaje['edad']);

// Modificando propiedades del objeto
personaje.nombre = "Nezuko Kamado";
personaje.anime = "Demon Slayer: Kimetsu no Yaiba";
personaje.edad = 14;

console.log("\nImprimiendo el objeto personaje modificado");
console.log(personaje);

let llave = "edad";
personaje[llave] = 16;

// Eliminando propiedades del objeto
delete personaje.anime;

console.log("\nImprimiendo el objeto personaje después de eliminar la propiedad anime");
console.log(personaje);


