function Punto (x, y){
    this.x =x;
    this.y =y;
    this.dibujar = function(){
        console.log('Dibujando...');
    }
}

let punto = { z:7 };
// call() y apply() permiten invocar una función estableciendo 
// explícitamente el valor de "this" y pasando argumentos.

// call() recibe los argumentos de la función separados por coma.
Punto.call(punto, 1, 2);
console.log(punto);

// apply() recibe los argumentos de la función en un array.
Punto.apply(punto, [1, 2]);
console.log(punto);



//NUNCA USAR ESTA COCHINADA:
const Point = new Function('x', 'y', `
    this.x =x;
    this.y =y;
    this.dibujar = function(){
        console.log('Dibujando...');
    };
`);

const p = new Point(1, 2);
console.log(p);

