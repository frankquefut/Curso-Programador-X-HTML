//Expresiones Regulares

let texto1 = "Me encanta la música de Charly García.";
let texto2 = "me encanta la música de Led Zeppelin.";
let texto3 = "encanta la música de Calle 13.";
let texto4 = "la música de Meshuggah.";
let texto5 = "música de Daft Punk.";
let texto6 = "Me gusta Diplo.";
let texto7 = "No me gusta Diplo.";

let regex = /Zeppelin.$/i;                       //La i es para que no le imprte si 
console.log(regex.test(texto1));           //es mayus o minus
console.log(regex.test(texto2));           //^ sig. que lo busca si esta al principio del texto
console.log(regex.test(texto3));           // $ este busca la palabra al final del texto
console.log(regex.test(texto4));
console.log(regex.test(texto5));            //Usa expresiones regulares para encontrar los números que tienen cinco dígitos en un texto. 
console.log(regex.test(texto6));            //let regex =/\b\d{5}\b/;
console.log(regex.test(texto7));

