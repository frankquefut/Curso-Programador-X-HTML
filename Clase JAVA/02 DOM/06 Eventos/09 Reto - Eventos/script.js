document.addEventListener('DOMContentLoaded', function() {
    const productos = document.querySelectorAll('.producto');
    const mensaje = document.getElementById('mensaje');
    const mensajeContenido = document.getElementById('mensaje-contenido');

    productos.forEach(producto => {
        producto.addEventListener('click', function() {
            // Mostrar mensaje
            mensajeContenido.textContent = `Producto agregado al carrito: ${producto.querySelector('h2').textContent}`;
            mensaje.style.display = 'block';

            // Ocultar mensaje después de 2 segundos
            setTimeout(function() {
                mensaje.style.display = 'none';
            }, 2000);
        });
    });
});
