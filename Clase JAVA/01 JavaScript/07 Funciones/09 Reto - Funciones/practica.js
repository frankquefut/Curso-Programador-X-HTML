const validarFormulario = (nombre, email, mensaje) => {
    return nombre && email && mensaje;
}


function enviarFormulario(nombre, email, mensaje) {

    if(validarFormulario(nombre, email, mensaje)){
        console.log('¡Formulario enviado con éxito!');
    }else{
        console.log('Por favor completa todos los campos.');
    }
}

const nombre = 'francisco';
const email = 'frankquefut4@hotmail.com';
const mensaje = 'Hola Soy Francisco';


enviarFormulario(nombre, email, mensaje);