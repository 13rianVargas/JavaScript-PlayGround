let array = [2, 5, 7, 15, -5, -100 ,55];

function cuantosPositivos(arr){
    let cont = 0;
    for (num of arr){
        if (num>0) cont++;
    }
    return cont;
}

let resultado = cuantosPositivos(array);
console.log(resultado);
