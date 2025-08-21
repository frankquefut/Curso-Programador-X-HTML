/*function Padre(nombre, apellido, soy) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.soy = soy;
}

Padre.prototype.saludo = function() {
    console.log(`Soy ${this.nombre} ${this.apellido} y soy ${this.soy}`);
}*/


class Padre {
    constructor(nombre, apellido, soy) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.soy = soy;
    }
    saludo() {
    console.log(`Soy ${this.nombre} ${this.apellido} y soy ${this.soy}`);
}
}

/*function Hijo(nombre, apellido, soy, tengo) {
    Padre.call(this, nombre, apellido, soy);
    this.tengo = tengo;
}*/

class Hijo extends Padre{
    constructor(nombre, apellido, soy, tengo) {
        super(nombre, apellido, soy);
        this.tengo = tengo;
    }

    saludoHijo() {
    console.log(`Soy ${this.nombre} ${this.apellido} y soy ${this.soy} y tengo ${this.tengo} años`);    
}
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


/*
Extender
Otro ejemplo:


class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }
  
  hablar() {
    console.log(`${this.nombre} hace un sonido.`);
  }
}

class Perro extends Animal {  
  hablar() {
    console.log(`${this.nombre} ladra.`);
  }
}

const miPerro = new Perro("Buddy");
miPerro.hablar();  // Salida: Buddy ladra.

En esta sintaxis abreviada se omitió el constructor en "Perro" para 
simplificar el código. Funciona con el mismo constructor de la clase 
"Animal" y puedes agregar un constructor si necesitas crear instancias 
de la clase "Perro" con argumentos adicionales.

PRO TIP 👉 No extiendas objetos incorporados como Object, Array, etc. 
en JavaScript. Extender estos objetos podría causar efectos secundarios 
no deseados en todo tu código.

RETO 
ℹ
Crea una clase llamada `Rectangulo` que tenga una propiedad llamada `alto`
y otra llamada `ancho`, y un método llamado `area` que devuelve el área del
rectángulo. Luego, crea una nueva clase llamada `Cuadrado` que extienda 
de `Rectangulo` con un constructor que solo reciba un `lado`.



class Rectangulo {
	constructor(alto, ancho) {
		this.alto = alto;
		this.ancho = ancho;
	}

	area() {
		return this.alto * this.ancho;
	}
}

class Cuadrado extends Rectangulo {
    constructor(lado) {
         super(lado, lado);
    }
}

*/