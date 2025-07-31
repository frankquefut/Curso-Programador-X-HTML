const svg = document.querySelector('.imagen-svg');
svg.addEventListener('click', evento => {
    console.log(evento);
    console.log(evento.clientX);
    console.log(evento.clientY);
    console.log(evento.pageX);
    console.log(evento.pageY);
    console.log(evento.pointerType);
    console.log(evento.type);
    console.log(evento.target);
});
