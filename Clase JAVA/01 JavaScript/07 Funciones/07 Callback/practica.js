/*function llamar(callback) {
    callback();
}

llamar(function(){console.log(3); });*/


/*function llamar(callback, a) {
    callback(33 + a);
}

llamar(console.log, 200);*/

// Hoy en dia es una practica evitar los callbacks pero aun asi los vas necesitar

function llamar(enExito, enError) {
    // ....Muchas veces tendras mucho codigo en esta seccion y aqui realizaras procedimientos
    // si tienes exito se pondra exito, si no sera error
    let exito = true;
    if(exito) {
        enExito(); 
    } else {
        enError();
    }
}

llamar(
    function(){console.log('Exito'); },
    function(){console.log('Error'); } );

    /*se recomienda evitar los callbacks, porque 
    hay algo que se llama callbacksHell, infierno
    de callbacks, que sucede cuadno una funcion llama a otra
    funcion y llama a otra funcion y realmente el codigo
    se vuelve muy dificil de leer. 
    
    PRO TIP 👉 El error más común que cometen los nuevos 
    programadores al usar Callbacks en JavaScript es el 
    tan temido "Callback Hell", producido por el anidamiento 
    excesivo de funciones. Para evitar esto, implementa la 
    técnica de "descomposición de funciones". Significa, 
    en lugar de anidar todas las funciones de callback, 
    divídelas en funciones más pequeñas y nombradas, y 
    luego llámalas cuando las necesites. De esta manera, 
    tu código es mucho más limpio y legible.
    */