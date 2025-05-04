let user1 = {
    id: 1,
    name: 'Brian',
    email: 'bri@gmail.com',
    activo: true,
    recuperarClave: function(){// <- A esto se le llama función anónima.
        console.log("Recuperando clave...");
    },
};
let user2 = {
    id: 2,
    name: 'Chanchito',
    email: 'chancho@gmail.com',
    activo: false,
    recuperarClave: function(){// <- A esto se le llama función anónima.
        console.log("Recuperando clave...");
    },
};
let user3 = {
    id: 3,
    name: 'Lina',
    email: 'linita@gmail.com',
    activo: true,
    recuperarClave: function(){// <- A esto se le llama función anónima.
        console.log("Recuperando clave...");
    },
};

function crearUsuario(name, email){
    return {
        name: name, //Forma larga
        email, //Forma corta (si se llaman igual)
        activo: true,
        recuperarClave: function(){// <- A esto se le llama función anónima.
            console.log("Recuperando clave...");
        },
    };
}

let user4 = crearUsuario("Steven", "steven@gmail.com");
let user5 = crearUsuario("Andrea", "andrea@gmail.com");

console.log(user1, user2, user3, user4, user5);