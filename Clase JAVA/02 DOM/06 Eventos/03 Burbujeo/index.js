const documento = document;
const body = document.body;
const svg = document.querySelector('.imagen-svg');

// fase de burbujeo
documento.addEventListener('click', () => {
    console.log('Clic en documento');
});

body.addEventListener('click', () => {
    console.log('Clic en body');
});

svg.addEventListener('click', () => {
    console.log('Clic en imagen');
});

// fase de captura
documento.addEventListener('click', () => {
    console.log('Clic en documento: captura');
}, true);

body.addEventListener('click', () => {
    console.log('Clic en body: captura');
}, true);

svg.addEventListener('click', () => {
    console.log('Clic en imagen: captura');
}, true);
