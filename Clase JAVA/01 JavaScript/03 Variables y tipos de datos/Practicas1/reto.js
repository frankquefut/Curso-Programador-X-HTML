let saludo = "'¡Hola Mundo!'";

let nombre = "Juan";

console.log(saludo + ' Soy ' + nombre)

console.log('Mi nombre en mayúsculas es:' + nombre.toUpperCase());
console.log('Mi nombre en minúsculas es:' + nombre.toLowerCase());

console.log(`El mensaje de ${saludo} tiene ` + saludo.length + " caracteres.");

let listaDeNumeros = [1, 2, 3, 4, 5];

console.log("El tercer número del array con los valores '1,2,3,4,5' es: " + listaDeNumeros[2]);

listaDeNumeros.push(6);

console.log("Se añade el número que sigue en orden al final del arreglo y es: " + listaDeNumeros[listaDeNumeros.length - 1]);

let texto = "'La lluvia en Sevilla es una maravilla'"
let patron = "'lluvia'"
const clave = /lluvia/

console.log(`Se encontro el patron ${patron} en el texto ${texto}, por lo que el resultado es: ` + texto.match(clave));