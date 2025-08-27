/*
try {
    let objeto = {};
    console.log(objeto.c.a);
} catch(error) {
    console.log('Error: ');
} finally {
    console.log('finally');
}
*/

try {
    let objeto = {};
    await
} catch(error) {
    console.log('Error: ');
} finally {
    console.log('finally');
}


/*
Errores

PRO TIP 👉 No ignores los mensajes de error en 
JavaScript. Utilízalos a tu favor para depurar 
tu código. Los mensajes de error normalmente te 
indican qué línea de tu código está causando el 
problema, por lo que te proporcionan una pista 
realmente útil de dónde arreglar las cosas.


RETO ℹ
Crea una función que divida dos números, pero 
maneja la excepción de división entre cero usando 
try/catch. Imprime el error en el formato 
'Error: error'.


function divide(a, b) {
  try {
    return a / b;
  } catch (error) {
    console.log('Error:', error);
  }
}




*/