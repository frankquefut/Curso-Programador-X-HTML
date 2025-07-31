const imagenes = document.querySelectorAll('img');
const segundoNodo = imagenes[1];
const nodoPadre = segundoNodo.parentElement;
const nodoAbuelo = nodoPadre.parentElement;

const body = document.body;
const nodosHijos = body.children;
const primerNodo = nodosHijos[0];

const primerHijo = nodosHijos.firstElementChild;
const ultimoHijo = nodosHijos.lastElementChild;