export function validarCorreo(correo) {
    if(correo.includes('@') && correo.includes('.')) {
        return true;
    } else {
        return false
    }
}

