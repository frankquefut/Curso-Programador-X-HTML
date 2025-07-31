class Uber {
    comunicar(conductor, mensaje) {
        console.log(`${Date.now()} [${conductor.nombre}]: ${mensaje}`);
    }
}

class Conductor {
    constructor(nombre, servicio) {
        this.nombre = nombre;
        this.servicio = servicio;
    }

    enviar(mensaje) {
        this.servicio.comunicar(this, mensaje);
    }
}

const servicio = new Uber();

const conductor1 = new Conductor('Michael Schumacher', servicio);
const conductor2 = new Conductor('Ayrton Sena', servicio);

conductor1.enviar('Estoy disponible');
conductor2.enviar('Estoy ocupado');