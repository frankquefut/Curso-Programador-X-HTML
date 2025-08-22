// Importar la función de validación desde 'validacionCorreo.js'
import { validarCorreo } from './validacionCorreo.js';

// Utilizar la función importada para validar un correo
const correo = 'correo@example.com';
const esValido = validarCorreo(correo);

if (esValido) {
    console.log(`${correo} es un correo electrónico válido.`);
} else {
    console.log(`${correo} no es un correo electrónico válido.`);
}
