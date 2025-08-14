// Ambito (Alcance o Scoope)

// Como las variables estan declaradas dentro de una funcion
// y como las puedes acceder

/* Este ejemplo hace que la var numero de afuera
se la variable principal y la var de adentro solo sea
la de la funcion, asi que son diferentes 
var numero = 4;

function ejemplo() {
    var numero = 10;
    console.log(numero);
}

ejemplo();
console.log(numero);
*/

/* Aqui el ejemplo nos marca que si no declaras
una variable con var dentro de la funcion
o la especificas, sobreescribes la variable de
afuera que es la global, asi que siempre se recomienda
declarar con var o cambiar el nombre de la variable
para no tener errores con las variables globales */

/*var numero = 4;

function ejemplo() {
    numero = 10;
    console.log(numero);
}

ejemplo();
console.log(numero);
*/


/* Siempre es mejor utilizar nombres diferentes
y siempre asegurarte declarar dentro de las
funciones y evitar afectar a variables que existen
afuera de una funcion, es mas es una buena buena
practica no crear variables fuera de una funcion*/

var numero = 4;        // esta variable es global  

function ejemplo() {   // ejemplo, scoope: es global
    var numero = 10;
    console.log(numero);

    function dentro(){  // esta funcion es local ya que es una
                        //  funcion que esta declarada dentro de una funcion  
    }

    dentro();
}

ejemplo();
console.log(numero);

/* En resumen hay qeu evitar sobreescribir variables
o funciones, haciendo las practicas correctas
para no cometer errores, entendiendo cual es su scoope
o alcance, ya sea global o local(de bloque) */


/* PRO TIP 👉 Uno de los errores más comunes en JavaScript 
es no entender correctamente el ámbito de las variables. 
Mi consejo para evitar esto es siempre declarar tus variables 
con 'let' o 'const' en lugar de 'var', ya que 'var' no respeta 
el ámbito de bloque, lo que puede llevar a resultados inesperados. 
Mantén las declaraciones de variables tan locales como sea posible, 
limitándolas al bloque en el que se utilizan. 


PROTIP: Evita usar 'var' para declarar variables en JavaScript, ya
que su alcance es global o de función entera, lo cual puede llevar 
a problemas de sobrescritura o acceso no intencionado. En cambio, 
utiliza 'let' que tiene un alcance de bloque, proporcionando un 
mayor control sobre dónde se puede acceder o modificar una variable.
*/
