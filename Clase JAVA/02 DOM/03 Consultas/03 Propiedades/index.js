const ultimoElemento = $0;
console.log(ultimoElemento);

const penultimoElemento = $1;
console.log(penultimoElemento);

const URL = document.URL;
console.log(URL);

const body = document.body;
console.log(body);

// Nodos heredan propiedades de otros objetos del DOM:
// HTMLImageElement < HTMLElement < Element < Node < EventTarget < Object

// obtener valor de atributo src
const imagen = document.getElementById('miImagen');
console.log(imagen.src);

// cambiar estilo de CSS a negro
body.bgColor = 'black';