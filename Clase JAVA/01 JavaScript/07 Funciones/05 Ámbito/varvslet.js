// Ambito: var vs let
/* se recomienda utilizar mas let que var, a menos que sepas
exactamente lo que estas haciendo*/

/* La diferencia entre var y let es que
var: trabaja en el ambito de la funcion pero
let: trabaja en el ambito de un bloque, como 
se define un bloque? con llaves: {}, se ha
trabado con bloques en diferentes maneras con
el codigo, ejemplo:

if(true) {}
while(false) {}
for(let i in[]) {}

Todos los de arriba son bloques ya que hay llaves
*/


var numero = 4;        // esta variable es global  


function ejemplo() {   // ejemplo, scoope: es global
    var numero = 10;
    //console.log(numero);

    function dentro(){}  // esta funcion es local ya que es una
    dentro();                    //  funcion que esta declarada dentro de una funcion  

    let numero2 = 2;

    {
        var numero = 100;        // Este es el ejemplo, se explica abajo
        let numero2 = 200;
    }

    console.log(numero);
    console.log(numero2);
}

ejemplo();
// console.log(numero);

/*    
{
    var numero = 100;        // Este es el ejemplo, se explica arriba
    let numero2 = 200;
}

aqui se ve que var: tiene un ambito de funcion, como esta
dentro de la funcion, realmente estamos sobreescribiendo
el var numero de la funcion, porque var trabaja en un
ambito de funcion pero
let: trabaja en un ambito de bloque, eso quiere
decir que tenemos declarado let pero dento del bloque
una vez el bloque termina, el let desaparece y el let 
numero que esta afuera sera el que aparecera, ya que es el
let que esta en lo bloque de la funcion ""ejemplo();"

var: ambito o scoope de funcion
let: ambito o scoope de bloque
*/
