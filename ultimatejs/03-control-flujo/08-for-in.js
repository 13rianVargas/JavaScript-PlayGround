let user = {
    id: 1,
    name: 'Chanchito feliz',
    age: 25,
};

for (let key in user) {
    console.log(key, user[key]); // id, name, age
}

// Si recorro un array con for in, es mejor usar for of
let animales = ["Chanchito", "Perro", "Gato", "Loro", "Tortuga"];
for (let index in animales) {
    console.log(index, animales[index]); // 0, 1, 2, 3, 4
}