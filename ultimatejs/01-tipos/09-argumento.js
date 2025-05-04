function suma(a){ // "a" es un parámetro acá 
    return a + 2;
}

let resultado = suma(5); // 5 es un argumento acá que se pasa a la función como el parámetro "a"
console.log("\nEsto imprime NaN, porque en JS no existe la sobrecarga de funciones:");
console.log(resultado);

function suma(a, b){
    
    console.log("\nEsto imprime todos los argumentos pasados a la función:");
    console.log(arguments);

    return a + b;
}

resultado = suma(5, 3, 1, 2, 3);
console.log("\nEsto imprime 8, porque ahora la función suma tiene dos parámetros:");
console.log(resultado);

console.log("\nEsto imprime function ya que es una función:");
console.log(typeof suma);