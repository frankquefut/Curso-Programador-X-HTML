let saludo = '¡Hola Mundo!';
let nombre = 'Juan';
let array = [1,2,3,4,5];
array.push(6);
let patron = /lluvia/;
let texto = "'La lluvia en sevilla es una maravilla'";
let resultado = texto.match(patron)[0];

console.log(saludo +' Soy '+ nombre);
console.log('Mi nombre en mayusculas es: '+ nombre.toUpperCase());
console.log('Mi nombre en minusculas es: '+ nombre.toLowerCase());
console.log('El mensaje de', saludo,'tiene',saludo.length,'caracteres.');
//console.log(`El mensaje de ${saludo} tiene ${saludo.length} caracteres.`);
console.log("El tercer numero del array con los valores '1,2,3,4,5' es:", array.length -2);
console.log('Se añade el numero que sigue en orden al final del arreglo y es:', array.length);
console.log("Se encontro el patron 'lluvia' en el texto ${texto} por lo que el resultado es:",resultado);
