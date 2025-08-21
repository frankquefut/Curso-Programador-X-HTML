class Vehiculo {
    constructor(numruedas) {
        this.numruedas = numruedas;
    }

    mostrarDetalles() {
        console.log(`Este Vehiculo tiene ${this.numruedas} ruedas`);
    }
}

class Carro extends Vehiculo{
    constructor(numruedas, pasajeros) {
        super(numruedas);
        this.pasajeros = pasajeros;
    }

    mostrarDetallesPer() {
        console.log(`Este Vehiculo tiene ${this.numruedas} ruedas. Puede transportar ${this.pasajeros} pasajeros`);
    }
}


class Bicicleta extends Vehiculo{
    constructor(numruedas, tipo) {
        super(numruedas);
        this.tipo = tipo;
    }

    mostrarDetallesPer() {
        console.log(`Este Vehiculo tiene ${this.numruedas} ruedas. Es una bicicleta de tipo ${this.tipo}`);
    }
}

const carro = new Carro(4, 5);
const bicicleta = new Bicicleta(2, 'Montaña');

carro.mostrarDetallesPer();
bicicleta.mostrarDetallesPer();