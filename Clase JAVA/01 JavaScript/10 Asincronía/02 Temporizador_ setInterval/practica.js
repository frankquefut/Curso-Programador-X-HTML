let i = 0;
console.log('antes');
let interval = setInterval(() =>{
    console.log(i++);
}, 2000);
console.log('despues');

setTimeout(() => {
    clearInterval(interval);
},5000)

//clearInterval(interval);

/*
Temporizador: setInterval

PRO TIP 👉 Asegúrate de siempre desactivar el temporizador 
con clearInterval una vez que ya no lo necesites. Los 
temporizadores de JavaScript como setInterval siguen 
ejecutándose incluso después de haber completado su tarea, 
lo que puede causar problemas de rendimiento en tu código.

RETO ℹ
Haz que se muestre 'Alarma' en la consola cada 3 segundos.

setInterval(() => console.log('Alarma'), 3000);


//Tambien funciono
setInterval(() => {console.log('Alarma'); }, 3000);
*/

