function getByIdx(arr, idx){
    if(idx >= arr.length){
        return "El índice es mayor que el tamaño del arreglo";
    }
    if(idx < 0){
        return "El índice es menor que cero";
    }
    return arr[idx];
}

let resultado = getByIdx([1, false], -1);
console.log(resultado);