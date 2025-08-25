let promesa = new Promise((reciboDatos, noReciboDatos) => {
    setTimeout(() => {
        reciboDatos('datos');
    }, 5000);
});


promesa
    .then(texto => texto.toUpperCase())
    .then(texto => texto + '!!!')
    .then(texto => console.log(texto))
    .catch(problema => console.log('Error: ' + problema))
    .finally(() => console.log('Todo Listo!!'));


    console.log('Quiero ejecutar lo mas pronto posible');
    

/*
Promesas
Este es un ejemplo que simula como funciona un pedido asíncrono a un 
servidor y podemos obtener una resolución (usando resolve) o un error 
(usando reject):


const status = 200;

const promesa = new Promise((resolve, reject) => {
  if (status === 200) return resolve("Respuesta recibida");
  reject('Error del Servidor');
});

promesa
  .then(respuesta => console.log(`Éxito: ${respuesta}`))
  .catch(error => console.log(`Error: ${error}`));


  PRO TIP 👉 Uno de los errores más comunes al utilizar Promesas 
  en JavaScript es no manejar errores adecuadamente. Para evitarlo, 
  siempre asegúrate de incluir un bloque .catch al final de tu cadena 
  de promesas para manejar cualquier error que pueda surgir durante la 
  ejecución. Esto garantizará que cualquier problema sea tratado de 
  manera adecuada y evitará que el código se cuelgue si algo no va bien.


RETO ℹ
Crea una promesa simple que resuelva al texto 'Éxito'

 new Promise(resolve => 
  resolve('Éxito')
);


*/