// Módulo de manejo de usuarios
const moduloUsuarios = (function () {
    // Usuarios almacenados localmente
    const usuarios = [];

    // Función para agregar un usuario al módulo
    function agregarUsuario(nombre) {
        usuarios.push({ nombre });
        console.log(`Usuario '${nombre}' agregado.`);
    }

    // Función para mostrar todos los usuarios en el módulo
    function mostrarUsuarios() {
        console.log('Lista de usuarios:');
        usuarios.forEach(usuario => console.log(usuario.nombre));
    }

    // Devolver métodos públicos del módulo
    return {
        agregar: agregarUsuario,
        mostrar: mostrarUsuarios
    };
})();

// Uso del módulo de manejo de usuarios
moduloUsuarios.agregar('Juan');
moduloUsuarios.agregar('María');
moduloUsuarios.mostrar();
