/**
 * @nombre constructor
 * @descipción
 * se utiliza para inicializar un objeto en la memoria
 * establece valores de propiedades y métodos cuando se crea el objeto por primera vez
 */

const instancia1 = {};

const instancia2 = Object.create(Object.prototype);

const instancia3 = new Object();

class Película {
    constructor(nombre, año) {
        this.nombre = nombre;
        this.año = año;
    }

    toString() {
        return `La película ${this.nombre} es del año ${this.año}`;
    }
}

// function Película(nombre, año) {
//     this.nombre = nombre;
//     this.año = año;
//     this.toString = function () {
//         return `La película ${this.nombre} es del año ${this.año}`;
//     }
// }


console.log(new Película('Roma', 2018).toString());
console.log(new Película('Twelve Monkeys', 1995).toString());
console.log(new Película('The Fountain', 2006).toString());