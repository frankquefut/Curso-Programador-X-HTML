const nodo = document.querySelector('h1');
console.log(nodo.style);

nodo.style.color = 'blue';
nodo.style.fontSize = '100px';

nodo.style.cssText = 'color: blue; font-size: 100px;';

// CSS usa guión (font-size)
// javaScript usa camelCase (fontSize)