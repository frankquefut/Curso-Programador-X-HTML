const nodo = document.querySelector('h1');
const listaDeClases = nodo.classList;
console.log(listaDeClases);

h1.classList.add('rojo'); // añadir clase
h1.classList.remove('rojo'); // remover clase
h1.classList.toggle('rojo'); // alternar clase
h1.classList.contains('rojo'); // contiene clase