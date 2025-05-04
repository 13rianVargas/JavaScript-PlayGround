// short-circuit

// Falso o FALSY
// false
// 0
// ''
// null
// undefined
// NaN

let nombre = '';

let username = nombre || 'Anónimo';

console.log(username);

function fn1() {
    console.log('\nsoy funcion 1');
    return false;
}

function fn2() {
    console.log('\nsoy funcion 2');
    return true;
}

let x = fn1() && fn2();