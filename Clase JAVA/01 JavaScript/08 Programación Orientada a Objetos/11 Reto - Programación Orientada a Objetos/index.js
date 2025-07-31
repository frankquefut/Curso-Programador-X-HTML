// Clase base Vehiculo
class Vehiculo {
    constructor(ruedas) {
        this.ruedas = ruedas; // Atributo: número de ruedas del vehículo
    }

    detalles() {
        return `Este vehículo tiene ${this.ruedas} ruedas.`; // Método: muestra los detalles del vehículo
    }
}

// Clase Automovil que hereda de Vehiculo
class Automovil extends Vehiculo {
    constructor(ruedas, capacidadPasajeros) {
        super(ruedas); // Llama al constructor de la clase base y establece el número de ruedas
        this.capacidadPasajeros = capacidadPasajeros; // Atributo adicional: capacidad de pasajeros
    }

    detalles() {
        return super.detalles() + ` Puede transportar ${this.capacidadPasajeros} pasajeros.`; // Sobrescribe el método detalles de la clase base para mostrar detalles específicos del automóvil
    }
}

// Clase Bicicleta que hereda de Vehiculo
class Bicicleta extends Vehiculo {
    constructor(ruedas, tipo) {
        super(ruedas); // Llama al constructor de la clase base y establece el número de ruedas
        this.tipo = tipo; // Atributo adicional: tipo de bicicleta
    }

    detalles() {
        return super.detalles() + ` Es una bicicleta de tipo ${this.tipo}.`; // Sobrescribe el método detalles de la clase base para mostrar detalles específicos de la bicicleta
    }
}

// Crear instancias de las clases
const automovil = new Automovil(4, 5); // Instancia de Automovil con 4 ruedas y capacidad para 5 pasajeros
const bicicleta = new Bicicleta(2, 'Montaña'); // Instancia de Bicicleta con 2 ruedas y tipo de montaña

// Mostrar detalles de los vehículos
console.log(automovil.detalles()); // Muestra los detalles del automóvil
console.log(bicicleta.detalles()); // Muestra los detalles de la bicicleta
