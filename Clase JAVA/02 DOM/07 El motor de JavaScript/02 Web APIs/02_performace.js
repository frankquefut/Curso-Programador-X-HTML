const antes = performance.now();

for (const i = 0; i < 400; i++) {
    const elemento = document.createElement('p');
    elemento.textContent = 'Este es un párrafo';
    document.body.appendChild(elemento);
}

const despues = performance.now();
console.log(despues - antes);