// Array literal con []
let animales = ['chanchito', 'perrito', 'gatito', 'pajarito'];

console.log("\nImprimiendo el array completo");
console.log(animales);

console.log("\nImprimiendo el primero elemento del array");
console.log(animales[0]);

animales[2] = 'dragón';

console.log("\nImprimiendo el array completo con dragón");
console.log(animales);

animales[10] = 'elefante';
console.log("\nImprimiendo el array completo con elefante y tamaño aumentado");
console.log(animales);

console.log("\nImprimiendo el array en posiciones específicas");
console.log("animales en pos 2 -> " + animales[2]);
console.log("animales en pos 10 -> " +animales[10]);

console.log("\nTamaño del array -> " + animales.length);