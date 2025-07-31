class Alexa {
    constructor(version) {
        this.version = version;
    }

    saludar() {
        console.log("Hola, soy Alexa!");
    }
}

const alexa1 = new Alexa("1");
const alexa2 = new Alexa("2");
const alexa3 = new Alexa("3");

// Alexa.prototype.saludar();

// alexa1.saludar();
// alexa1.__proto__.saludar();

class EchoDot extends Alexa {
    constructor(version) {
        super(version);
    }

    apagar() {
        console.log("Buenas noches!");
    }
}

const echoDot = new EchoDot("1");

// echoDot.saludar();
// echoDot.__proto__.saludar();
// echoDot.__proto__.__proto__.saludar();

// echoDot.apagar();
// echoDot.__proto__.apagar();
// echoDot.__proto__.__proto__.apagar();

const echoDot2 = Object.create(EchoDot.prototype);
echoDot2.apagar();


