let promesa = new Promise((reciboDatos, noReciboDatos) => {
    setTimeout(()=>{
        reciboDatos('datos');
    }, 5000);
});


async function asincrona() {
   let resultado = await promesa;
   console.log(resultado.toUpperCase()); 
}


/*
(async function asincrona() {
   let resultado = await promesa;
   console.log(resultado.toUpperCase()); 
})();
*/

asincrona();
/* El unico requisito para usar await esque este codigo
debe de estar dentro de una funcion y tenemos que
indicar que esa funcion es asincrona*/



/*
Función async
La palabra clave await solo es válida dentro de las 
funciones asíncronas (async). Si la usas fuera 
de una función asíncrona, obtendrá un error 
SyntaxError.

PRO TIP 👉 No utilices async sin el acompañamiento
 de try/catch. Muchos nuevos programadores omiten 
 el uso de bloques try/catch alrededor de su 
 código async, lo que puede llevar a errores no 
 controlados. Para manejar adecuadamente las 
 promesas rechazadas, siempre utiliza 
 async/await dentro de un bloque try/catch.

 

RETO ℹ
Observa la siguiente imagen. En el lado izquierdo 
se encuentra la ilustración web del ejercicio y del 
lado derecho una ilustración de la promesa para 
mostrarte lo que esta sucediendo antes del 
ejercicio que realizarás a continuación.

Crea la función 'recibirCelulares' utilizando 
async/await, esta debe guardar en la constante 
'celulares' lo retornado de la función 'obtenerDatos' 
de la imagen e imprimir su contenido en la consola. 
Una vez realizada la función ejecútala en la 
siguiente línea.


async function recibirCelulares() {
    const celulares = await obtenerDatos();
    console.log(celulares);
}

recibirCelulares();

*/