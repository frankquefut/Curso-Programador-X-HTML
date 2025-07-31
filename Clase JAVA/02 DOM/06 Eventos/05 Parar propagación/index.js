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

svg.addEventListener('click', evento => {
    console.log('Clic en imagen');
    evento.stopPropagation();
});