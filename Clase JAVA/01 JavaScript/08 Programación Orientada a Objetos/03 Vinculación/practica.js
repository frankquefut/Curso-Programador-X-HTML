//Vinculacion
// Forma de vincular una funcion a un objeto en forma de un metodo.


/*function info(){
    console.log(this);
}

let auto = {
    modelo: 'Modelo 3',
    año: 2021,
    marca: 'Tesla',
    info: info
}

auto.info();*/




function info(a) {
    console.log(this, a);
}

let auto = {
    modelo: 'Modelo 3',
    año: 2021,
    marca: 'Tesla',
  
};

//info.bind(auto)();
//info.call(auto, 10, 20);
info.apply(auto, [10, 20]);

// bind, call, apply


/*
 Vinculación
Vinculación implícita: el método obtiene acceso al contexto 
automáticamente desde un objeto, una función regular, o una clase.

Vinculación explícita: la función obtiene acceso al contexto 
que le demos usando los métodos call, apply y bind.

No podemos usar los métodos call, apply y bind en las funciones 
de flecha para cambiar el valor de this, porque las funciones de 
flecha no tienen su propio contexto this.

PRO TIP 👉 No utilices funciones de flecha cuando necesites 
utilizar 'this' en métodos de objetos o constructores. En su lugar,
utiliza funciones regulares que vinculan correctamente 'this' 
al objeto en contexto.
*/

