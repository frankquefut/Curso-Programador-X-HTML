/*function Auto(modelo, año, marca) {
    this.modelo = modelo;
    this.año = año;
    this.marca = marca;
    this.info = function() {
        return this.modelo + " - "+ this.marca + " - " + this.año;
    }
}

const auto1 = new Auto('Modelo 3', 2021, 'Tesla');
const auto2 = new Auto('Hummer EV', 2022, 'GMC');

console.log(auto1.info());
console.log(auto2 .info());*/

function Auto(modelo, año, marca) {
    this.modelo = modelo;
    this.año = año;
    this.marca = marca;
}

Auto.prototype.info = function() {
        return this.modelo + " - "+ this.marca + " - " + this.año;
    }

const auto1 = new Auto('Modelo 3', 2021, 'Tesla');
const auto2 = new Auto('Hummer EV', 2022, 'GMC');

console.log(auto1.info());
console.log(auto2.info());


/*

Prototype

PRO TIP 👉 Uno de los errores más comunes al usar Prototype 
en JavaScript es no entender que todas las instancias de una 
función comparten el mismo prototipo. Por eso, no es recomendado 
almacenar valores que pueden cambiar en el prototipo. 
Así que el pro tip sería: utiliza el prototipo para métodos y 
propiedades que son compartidas por todas las instancias, pero 
no para aquellas que sean únicas para cada instancia.


RETO ℹ
Crea un objeto 'Persona' con una propiedad 'nombre' y un 
método 'saludar' que imprima 'Hola, mi nombre es <nombre>' 
en la consola.

function Persona(nombre) {
	this.nombre = nombre;
    
}

Persona.prototype.saludar = function() {
    console.log('Hola, mi nombre es' + this.nombre);
}



*/