let auto1 = {
    modelo: 'Modelo 3',
    año: 2021,
    marca: 'Tesla'
};

let auto2 = {
    modelo: 'Hummer EV',
    año: 2022,
    marca: 'GMC'
};

let servicio = {
    nombre: 'Transforma modelos a mayusculas',
    transformar: function(auto) {
        auto.modelo = auto.modelo.toUpperCase()
    }
};

servicio.transformar(auto2);
console.log(auto2);



/*
POO
En resumen la programación orientada a objetos es transformar 
objetos del mundo real a código (esto lo explico a detalle en 
el video de POO). Todos los videos de esa sección te permiten 
aprender herramientas para realizar estas transformaciones de 
 maneras más eficientes.

Por ejemplo puedo crear objetos del mundo real como un auto, 
un animal, un perro, una persona, una dirección, un usuario. 
Y cada uno de estos objetos van a tener propiedades y métodos. 
Como propiedades puedes tener: un auto gris, un animal pequeño, 
un perro salchicha, una dirección en Seattle, un usuario con el 
nombre Seigi. Y cada uno de esto objetos también pueden tener 
métodos o acciones como: un perro que ladra, un auto que se mueve, 
un usuario que escribe.

Esta es la idea fundamental pero hay otras herramientas que son 
útiles como la herencia. Por ejemplo el objeto perro puede heredar 
del objeto animal, y el objeto gato también. Pero el objeto perro no 
debería heredar del objeto gato porque son diferentes.


Ejemplo

const nova = {
  marca: 'Huawei',
  modelo: 'Nova 10 Pro',
  año: 2021
}

const iphone = {
  marca: 'Apple',
  modelo: 'iPhone 14 Pro',
  año: 2022
}

const servicioActualizador = {
  nombre: 'Actualiza a iPhone 14 Pro Max',
  actualizar: function(celular) {
    const copia = JSON.parse(JSON.stringify(celular));
    copia.modelo = 'iPhone 14 Pro Max';
    return copia;
  }
}

console.log(iphone);
console.log(servicioActualizador.actualizar(iphone));



PRO TIP 👉 Al trabajar con programación orientada a objetos (POO) en JavaScript, la confusión con el 
valor de "this" se encuentra entre los errores más comunes. Por lo tanto, mi consejo es: 
siempre ten claro a qué se está refiriendo "this" en tus métodos. Si es necesario, 
utiliza métodos vinculados o funciones de flecha para mantener su contexto correcto.



RETO ℹ
Crea un objeto que represente un lenguaje de programación con las 
siguientes propiedades: nombre, año, autor, y una función obtenerInfo() 
que retorne una cadena de texto: JavaScript fue creado en 1995 por Brendan Eich.


const javascript = {
    nombre:'JavaScript',
    año: 1995,
    autor:'Brendan Eich',
    obtenerInfo() {
        return `${this.nombre} fue creado en ${this.año} por ${this.autor}.`;
}
};


*/

