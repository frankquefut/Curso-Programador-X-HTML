console.log('primero');
setTimeout(function callback() {
    console.log('segundo');
}, 2000);
console.log('tercero');

// Call Stack
// []
// [console.log('primero')]
// [setTimeout] (se llama Web API)
// [console.log('tercero')]
// []

// Web APIs (paralelo)
// []
// [callback] (espera 2 segundos)
// []

// Callback Queue 
// []
// [callback] (se envía a Call Stack cuando esté vacío)
// []

// Call Stack
// []
// [callback]
// [callback, console.log('segundo')]
// [callback]
// []

// mismo orden, sin espera incluso con tiempo 0
console.log('primero');
setTimeout(function callback() {
    console.log('segundo');
}, 0);
console.log('tercero');