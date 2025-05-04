let a = 1;
let b = a;

b++;
console.log(a,b);

a = {};
b = a;

b.prop = 1;
console.log(a,b);

let c = 1;
let d = {prop: 1};

function suma1(n){
    n++;
}
function suma2(n){
    n.prop++;
}

suma1(c);
suma2(d);
console.log(c);
console.log(d);

/**
 * CONCLUSIÓN:
 * Los datos primitivos se copian
 * Los datos de referencia como objetos, arreglos, funciones se referencian
 */
