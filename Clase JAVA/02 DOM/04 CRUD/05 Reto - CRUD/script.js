
const componenteLista = document.getElementById('componente-lista');

    const nuevoComponente = document.createElement('div');
    nuevoComponente.innerHTML = `
        <h3>Componente 1</h3>
        <p>Aqui va la descripcion</p>
    `;
    componenteLista.appendChild(nuevoComponente);


    const primerComponente = componenteLista.firstChild;
    if (primerComponente) {
        primerComponente.innerHTML = `
            <h3>Componente Editado</h3>
            <p>Este es el nuevo contenido del componente.</p>
        `;
    }


