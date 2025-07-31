const enlace = document.querySelector('a.enlace');

enlace.addEventListener('click', evento => {
    console.log('Previene navegación predeterminada');
    evento.preventDefault();
}, true);