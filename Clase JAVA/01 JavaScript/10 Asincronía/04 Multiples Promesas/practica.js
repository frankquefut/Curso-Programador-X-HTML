let promesa1 = new Promise((reciboDatos, noReciboDatos) => {
    setTimeout(() =>{ reciboDatos('datos1'); }, 5000);
});

let promesa2 = new Promise((reciboDatos, noReciboDatos) => {
    setTimeout(() =>{ reciboDatos('datos2'); }, 2000);
});

Promise.all([promesa1, promesa2])
    .then(([resultado1, resultado2])=>{
        console.log(resultado1);
        return resultado2
    })
    .then(resultado2 => {
        console.log(resultado2.toUpperCase())
    });


/* 
Multiples Promesas

PRO TIP 👉 En lugar de anidar varios bloques 
then() uno tras otro, utiliza Promise.all(). 
Esto te permitirá manejar múltiples promesas 
al mismo tiempo y te facilitará el manejo de 
los errores.

RETO ℹ
Vemos un par de promesas que se resuelven, 
una después de 1 segundo y otra que después 
de 2 segundos. Concatena los resultados 
cuando se hayan cumplido las promesas e 
imprímelos.





*/    