/*function Auto(modelo, año, marca) {
    this.modelo = modelo;
    this.año = año;
    this.marca = marca;
}

Auto.prototype.info = function() {
        return this.modelo + " - "+ this.marca + " - " + this.año;
    }*/

class Auto {
    constructor(modelo, año, marca) {
        this.modelo = modelo;
        this.año = año;
        this.marca = marca;
    }

    info() {
        return this.modelo + " - "+ this.marca + " - " + this.año;    
    }
}

const auto1 = new Auto('Modelo 3', 2021, 'Tesla');
const auto2 = new Auto('Hummer EV', 2022, 'GMC');

console.log(auto1.info());
console.log(auto2.info());



/*
Clases

ejemplo:

class Computador {
  constructor(RAM, CPU, GPU) {
    this.RAM = RAM;
    this.CPU = CPU;
    this.GPU = GPU;
  }

  info() {
    return `Esta es una computadora con una RAM ${this.RAM}, ademas cuenta con una CPU ${this.CPU} y una gráfica ${this.GPU}.`
  }
}

let miCompu = new Computador('DDR4', 'RYZEN 5', '3090ti');
console.log(miCompu.info());



PRO TIP 👉 No uses clases si no las necesitas. 
Crear un objeto directamente puede ser más 
eficiente y simple.




RETOℹ
Twitch en twitch.tv es la plataforma de live 
streaming más grande del mundo y las apps de 
este nivel usan programación orientada a los 
objetos.

Crea la clase 'Canal' para la cual debes 
construir un objeto utilizando el método 
constructor(), tu objeto debe de tener las 
propiedades 'canal', 'tipo' 'espectadores', 
'url', crea el método 'ir' que imprime la 
url en la consola, con const guarda tu 
nuevo objeto con el nombre 'canal'
utilizando la clase y pasando los valores
}'RollingStone', 'Music', 1432 y 
}'https://www.twitch.tv/rollingstone' 
}respectivamente llama el método ir del 
objeto instanciado.



class Canal {
    constructor(canal, tipo, espectadores, url) {
        this.canal = canal;
        this.tipo = tipo;
        this.espectadores = espectadores;
        this.url = url;
    }

    ir() {
        console.log(this.url);
    }
       
}

const canal = new Canal('RollingStone', 'Music', 1432, 'https://www.twitch.tv/rollingstone');

canal.ir();

*/