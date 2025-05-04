const punto = {
    x:10,
    y:15,
    dibujar(){
        console.log('Dibujando..');
    }
}

// delete punto.dibujar;

if('dibujar' in punto){ // Pregunta si existe la propiedad en el obj punto
    punto.dibujar();
} else console.log('¡No existe!');

console.log("\nPROPIEDADES:");
console.log(Object.keys(punto)); // Keys enlista los valores de todas las propiedades del objeto.

console.log("\nPROPIEDADES & VALOR:");
for(let llave of Object.keys(punto)){ //Object.keys devuelve un array
    console.log(llave, punto[llave]);
}

console.log("\nMétodo ENTRIES (old) prop y valor:");
for(let entry of Object.entries(punto)){ //Object.entries nos devuelve el par de propiedad y valor.
    console.log(entry);
}

console.log("\nMétodo prop y valor (new) sin entries:");
for(let llave in punto){
    console.log(llave, punto[llave]);
}


