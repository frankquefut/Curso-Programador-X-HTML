// Object();

// creamos nueva lista
//console.log(new Array());


/*Prototipo de array = object 
const lista = new Array();
console.log(Array.prototype);
*/


const lista = new Array();
//console.log(Object.prototype);

/*
Todo es objeto
console.log(Array.prototype);
console.log(Map.prototype);
console.log(Set.prototype);
*/

class SuperArray extends Array {

}

console.log(SuperArray.prototype);



/*
Herencia Prototípica

Aprende más sobre la Herencia y la cadena de prototipos aquí:

https://developer.mozilla.org/es/docs/Web/JavaScript/Inheritance_and_the_prototype_chain



PRO TIP 👉 Cuando utilices Herencia Prototípica en JavaScript, asegúrate 
de no caer en el error común de reescribir los métodos heredados en cada 
objeto creado. En lugar de eso, define estos métodos una sola vez en el 
prototipo, para que todos los objetos de esta clase puedan acceder a ellos. 
Esto mejora la eficiencia y la legibilidad de tu código.

RETO 
ℹ
Imprime el tipo de este objeto para recordar que 
'Todo en JavaScript hereda de Object'.


const computadora = { marca: 'Dell', modelo: 'Latitude', ram: 16 };
console.log(typeof computadora);
*/