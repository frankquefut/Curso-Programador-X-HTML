/*function llamar(enExito, enError) {
    let exito = true;
    // .....
    if (exito) {
        enExito();
    } else {
        enError();
    }
}

llamar(
    () =>  console.log('Exito'),
    () =>  console.log('Error')
);*/

//[1,2,3,40].forEach((e,i) => { console.log(e,i); } )
[1,2,3,40].forEach(console.log);



// PRO TIP 👉 Evita confundir el uso del operador 'this' en las funciones flecha. Recuerda que las funciones flecha no crean su propio contexto de 'this', en su lugar, 'this' se refiere al contexto en el que están encerradas. Por lo tanto, si necesitas referenciar el objeto que contiene la función, utiliza una función normal en lugar de una función flecha.