const antes = performance.now();

const fragmento = document.createDocumentFragment();
for (const i = 0; i < 400; i++) {
    const elemento = document.createElement('p');
    elemento.textContent = 'Este es un párrafo';
    fragmento.appendChild(elemento);
}
document.body.appendChild(fragmento);

const despues = performance.now();
console.log(despues - antes);