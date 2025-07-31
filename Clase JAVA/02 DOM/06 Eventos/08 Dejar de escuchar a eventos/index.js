const svg = document.querySelector('.imagen-svg');
svg.addEventListener('click', agrandar);
svg.removeEventListener('click', agrandar);

function agrandar() {
    svg.style.transform = 'scale(2)';
}