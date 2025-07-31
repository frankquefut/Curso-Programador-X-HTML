document.addEventListener('click', callback);

function callback() {
    console.log('Recibí un click!');
}

const svg = document.querySelector('.imagen-svg');
svg.addEventListener('click', () => {
    svg.style.transform = 'scale(2)';
});