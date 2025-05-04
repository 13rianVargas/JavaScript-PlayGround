let obj1 = {};
let obj2 = new Object();

/**
 * new Object(); {}
 * new Array(); []
 * new String(); "" || '' || ``
 * new Number(); 123
 * new Boolean(); true || false
 */

function Usuario(){
    this.name = "Chanchito feliz";
}

let user = new Usuario();
console.log(user.constructor);

console.log("\nDevuelven Object:");
console.log(" > por ser creados con el constructor");
console.log(typeof new String());
console.log(typeof new Number());
console.log(typeof new Boolean());

console.log("\nDevuelven tipo:");
console.log(" > por ser creados literalmente");
console.log(typeof "");
console.log(typeof 123);
console.log(typeof true);

console.log("\nDevuelven constructor:");
console.log(" > por ser código nativo");
console.log("".constructor);
let num = 123;
console.log(num.constructor);
console.log(true.constructor);


console.log("\nEjemplo de ERROR:");

const s1 = "1 + 1";
const s2 = new String("1 + 1"); //Es un objeto

console.log(s1, s2);

console.log(eval(s1), eval(s2));//El primero se suma, el segundo sigue siendo objeto string
console.log(s1.valueOf(),s2.valueOf()); //Devuelve su valor como string literal

console.log(eval(s2.valueOf())); //Combinación de ambas, brutal

//Consejo, siempre crear variables literales, si no, toca usar valueOf()
