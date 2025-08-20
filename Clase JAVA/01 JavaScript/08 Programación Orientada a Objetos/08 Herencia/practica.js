function Padre(nombre, apellido, soy) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.soy = soy;
}

Padre.prototype.saludo = function() {
    console.log(`Soy ${this.nombre} ${this.apellido} y soy ${this.soy}`);
}

function Hijo(nombre, apellido, soy, tengo) {
    Padre.call(this, nombre, apellido, soy);
    this.tengo = tengo;
}

Hijo.prototype = Padre.prototype;
Hijo.prototype.saludoHijo = function() {
    console.log(`Soy ${this.nombre} ${this.apellido} y soy ${this.soy} y tengo ${this.tengo} años`);    
}

const padre = new Padre('Ramon Antonio Gerardo', 'Estevez', 'el padre');
const hijo = new Hijo('Carlos Irwin', padre.apellido, 'el hijo', 55);

//console.log(padre);
//console.log(hijo);

padre.saludo();
hijo.saludoHijo();





// Herencia

/*
En el siguiente video veremos la sintaxis moderna 
que es mucho más simple así que no tienes que 
profundizar mucho en este video pero puede ser 
útil si deseas saber como funciona detrás de 
escena.

Este es otro ejemplo para reforzar tus 
conocimientos:


function Animal(nombre) {
   this.nombre = nombre;
}

// creo un método para Animal
Animal.prototype.obtenerNombre = function() {
    return this.nombre;
}

function Mamifero(nombre, tienePelo) {
    // hereda la propiedad nombre de Animal
    Animal.call(this, nombre);
    this.tienePelo = tienePelo;
}
// hereda los métodos de Animal
Mamifero.prototype = Object.create(Animal.prototype);

// creo un método para Mamifero
Mamifero.prototype.obtenerTienePelo = function() {
    return this.tienePelo;
}

function Perro(nombre, raza) {
    // hereda la propiedad nombre de Mamīfero
    Mamifero.call(this, nombre, true);
    this.raza = raza;
}

// hereda los métodos de Mamifero
Perro.prototype = Object.create(Mamifero.prototype);

// creo un método para Perro
Perro.prototype.obtenerRaza = function() {
    return this.raza;
}

var firulais = new Perro('Firulais', 'Labrador');

console.log(firulais.obtenerNombre());  // 'Firulais'
console.log(firulais.obtenerTienePelo()); // true
console.log(firulais.obtenerRaza()); // 'Labrador'


Este puede ser un tema bastante complejo así que 
aquí dejo un recurso para leer más a profundidad 
con ejemplos:

https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/Classes_in_JavaScript


PRO TIP 👉 Evita la confusión entre la Herencia 
y la Composición. Recuerda que la Herencia es 
útil para relaciones "es un tipo de", pero con 
JavaScript, suele ser más efectivo usar 
Composición para relaciones "tiene un". Con la 
composición, puedes construir objetos más 
flexibles y manejables que con la herencia 
estricta.



RETO ℹ
Crea un objeto 'perro' con un método 'ladra' que 
imprima 'guau' en la consola. 'perro'se debe 
crear a partir de una clase funcional 'Perro'. 
Asegúrate que 'Perro' herede de la clase 'Animal' 
y llama a su método 'ladra' al final.



function Animal() {
}

function Perro(){}
 Perro.prototype = new Animal();
 Perro.prototype.ladra = function() {
     console.log('guau');
 };

const perro = new Perro();
perro.ladra();
*/