let numero = 42;
let nombre = "Hola Mundo";
let verdadero = true;
let undef;
let nulo = null;

nombre = 53; //redefinición de variable

console.log(nombre);
console.log(typeof nombre); // imprime el tipo de dato de la variable

console.log(typeof numero); // imprime number
console.log(typeof nombre); // imprime number
console.log(typeof verdadero); // imprime boolean
console.log(typeof undef); // imprime undefined
console.log(typeof nulo); // imprime object porque es un objeto aunque sea null