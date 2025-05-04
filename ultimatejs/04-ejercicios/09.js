let pairs =[
    [1, {name: "Nicolas"}],
    [2, {name: "Felipe"}],
    [3, {name: "Chanchito"}],
];

let array = [{
    id: 1,
    name: 'Nicolas',
},{
    id: 2,
    name: 'Felipe',
},{
    id: 3,
    name: 'Chanchito',
}];

function toArray(pares){
    let arr = [];
    for(idx in pares){
        let ide = pares[idx][0];
        let nombre = pares[idx][1].name;
        arr[idx] = {id: ide, name: nombre};
    }
    return arr;
};

let resultado = toArray(pairs);
console.log(resultado);