/*
AJAX
Esta era la forma en que pedias informacion
a un servidor en el pasado
*/

/*var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    console.log(this.responseText);
};

xhttp.open("GET", "www.xaviro.com", true);
xhttp.send();*/

fetch("www.xaviro.com")
    .then(response => response.json())
    .then(json => {
        console.log(json);
    })



/*
Fetch Web API
En resumen, para hacer pedidos puedes usar AJAX 
(legacy), Fetch, y también existen librerías de 
Javascript como Axios (que debes instalar) que te 
permiten hacer pedidos.

1. XMLHttpRequest (AJAX): este es un objeto JavaScript 
incorporado que te permite realizar solicitudes HTTP. 
Puedes usarlo para enviar una solicitud HTTP a un 
servidor y cargar los datos de respuesta del servidor. 
Este es un ejemplo de cómo usar XMLHttpRequest para 
realizar una solicitud HTTP GET a un servidor:


const request = new XMLHttpRequest();

request.open('GET', 'https://mi-api.com/recursos', true);

request.onload = function () {
  if (this.status >= 200 && this.status < 400) {
    // La solicitud ha tenido éxito
    const data = JSON.parse(this.response);
    console.log(data);
  } else {
    // Se ha producido un error al realizar la solicitud
  }
};

request.onerror = function () {
  // Se ha producido un error al realizar la solicitud
};

request.send();




2. Fetch API: esta es una API más nueva que proporciona 
una interfaz más fácil de usar para realizar solicitudes 
HTTP. Utiliza Promesas, lo que facilita el manejo de 
solicitudes asincrónicas. Este es un ejemplo de cómo 
utilizar la API Fetch para realizar una solicitud HTTP 
GET:

fetch('https://mi-api.com/recursos')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));




3. axios: esta es una biblioteca de JavaScript popular 
que proporciona una interfaz simple para realizar 
solicitudes HTTP. Funciona tanto en el navegador como 
en Node.js, y tiene una sintaxis similar a la API Fetch. 
Aquí hay un ejemplo de cómo usar axios para hacer una 
solicitud HTTP GET:

axios.get('https://mi-api.com/recursos')
  .then(response => console.log(response.data))
  .catch(error => console.error(error));


Puedes revisar mi galería usada en el ejemplo en 
https://photo-gallery-vue.xaviro.com/


PRO TIP 👉 Siempre verifica y maneja errores cuando 
utilices Fetch en JavaScript. No asumas que la solicitud 
siempre será exitosa. Siempre utiliza .catch al final de 
tu cadena de promesas para capturar y manejar cualquier 
error que pueda ocurrir durante la solicitud.




RETO ℹ
Obtener los datos de un usuario (en data.name) a través 
de una API y mostrar su nombre en la consola.



*/