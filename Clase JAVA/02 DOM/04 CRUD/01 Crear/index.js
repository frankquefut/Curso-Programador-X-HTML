const titulo =  document.querySelector('h1');
const span = document.createElement('span');
span.textContent = '?';
titulo.appendChild(span);

titulo.insertAdjacentHTML('beforebegin', span);
titulo.insertAdjacentHTML('afterbegin', span);
titulo.insertAdjacentHTML('beforeend', span);
titulo.insertAdjacentHTML('afterend', span);


