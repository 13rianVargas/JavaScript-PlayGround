//Basicly POO
let user = {
    email: 'bri@gmail.com',
    name: 'Brian',
    addres: {
        calle: 'NQS',
        numero: 15,
    },
    activo: true,
    recuperarClave: function(){// <- A esto se le llama función anónima.
        console.log("Recuperando clave...");
    },
};