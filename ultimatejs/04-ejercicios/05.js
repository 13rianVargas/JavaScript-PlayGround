let array = [2, 5, 7, 15, -5, -100 ,55];

function getMenorMayor(array){
    let mayor = array[0];
    let menor= array[0];
    for (num of array) {
        menor = num < menor ? num : menor;
        mayor = num > mayor ? num : mayor;
    }
    return [menor,mayor];
}

let numeros = getMenorMayor(array);

console.log(numeros);
