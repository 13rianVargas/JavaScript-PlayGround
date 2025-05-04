function Usuario(){
    this.id = 1;
    this.recuperarClave = function () { //método = una funcion asignada a la propiedad de un objeto
        console.log('Recuperando clave...');
        
    };
};

let usuario = new Usuario();

console.log(usuario);
