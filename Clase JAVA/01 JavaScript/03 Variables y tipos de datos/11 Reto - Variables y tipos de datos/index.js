
// Parte 1: Variables y texto

// Declaración de variables con texto
let mensaje = "¡Hola Mundo!";
let nombre = "Juan";

// Concatenación de texto
console.log(mensaje + " Soy " + nombre);

// Parte 2: Métodos de texto

// Convertir a mayúsculas y minúsculas
console.log("Mi nombre en mayúsculas es:" + nombre.toUpperCase()); // Mostrar el nombre en mayúsculas
console.log("Mi nombre en minúsculas es:" + nombre.toLowerCase()); // Mostrar el mensaje en minúsculas

// Longitud de texto
console.log("El mensaje de ¡Hola Mundo!' tiene '" + mensaje.length + " caracteres.");

// Parte 3: Arrays

// Declaración de un array de números
let numeros = [1, 2, 3, 4, 5];

// Acceder a elementos del array
console.log("El tercer número del array con los valores '1,2,3,4,5' es: " + numeros[2]);

// Añadir un elemento al array
numeros.push(6);
console.log("Se añade el número que sigue en orden al final del arreglo y es: " + numeros[numeros.length - 1]);

// Parte 4: Expresiones Regulares

// Búsqueda de patrón en texto
let texto = "La lluvia en Sevilla es una maravilla.";
let patron = /lluvia/;
let resultado = texto.match(patron);


console.log("Se encontró el patrón 'lluvia' en el texto 'La lluvia en Sevilla es una maravilla', por lo que el resultado es: "+resultado);

