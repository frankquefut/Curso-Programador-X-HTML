const validarFormulario = (nombre, email, mensaje) => {
    return nombre && email && mensaje;
};

function enviarFormulario(nombre, email, mensaje) {
    if (validarFormulario(nombre, email, mensaje)) {
        console.log("¡Formulario enviado con éxito!");
    } else {
        console.log("Por favor completa todos los campos.");
    }
}

const nombre = "Juan";
const email = "juan@example.com";
const mensaje = "Hola, ¿cómo estás?";

enviarFormulario(nombre, email, mensaje);
