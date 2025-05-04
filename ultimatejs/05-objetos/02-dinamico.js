const user = {
    id: 1
};

user.name = 'Brian';
user.guardar = function(){
    console.log('Guardando', user.name);
}

user.guardar();

console.log("\nObjeto antes de delete -> ", user);

delete user.id;
delete user.name;
delete user.guardar;

console.log("\nObjeto despues de delete -> ", user);

const user1 = Object.freeze({ id: 1 }); //Freeze proteje propiedades y valores.

//Aunque se intente agregar una propiedad o modificar un valor del objeto, no cambiará.
user1.name = 'Brian';
user1.id = 3000;

console.log("\nObjeto freezed ->", user1);

const user2 = Object.seal({ id: 1 }); //Seal proteje solo propiedades.

user2.name = 'Brian'; //Intento agregar una propiedad, no funciona.
user2.id = 3000; //Modifico el valor id.

console.log("\nObjeto sealed ->", user2);
