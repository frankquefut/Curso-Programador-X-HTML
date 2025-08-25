console.log('antes');

let timeout = setTimeout(() => { 
    console.log('Cualquier codigo');
},3000);

console.log('despues');

clearTimeout(timeout);//este lo cancela


/*

Temporizador: setTimeout

PRO TIP 👉 Un consejo crucial para el uso de `setTimeout` en JavaScript 
es no asumir que tu código se ejecutará exactamente después del tiempo 
especificado. `setTimeout` no garantiza la ejecución en ese tiempo exacto, 
simplemente pone tu código en una cola para ser ejecutado después del 
tiempo establecido. Si hay otras funciones en la cola, `setTimeout` 
tendrá que esperar su turno, lo cual podría resultar en un retraso.


RETO ℹ
Crea un temporizador de 2 segundos usando setTimeout 
que llame a la función mostrarMensaje.

setTimeout(mostrarMensaje, 2000);

*/