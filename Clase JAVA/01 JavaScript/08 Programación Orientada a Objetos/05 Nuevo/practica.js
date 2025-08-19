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


function Auto(modelo, año, marca) {
    this.modelo = modelo;
    this.año = año;
    this.marca = marca;
}

console.log(new Auto('Modelo 3', 2021, 'Tesla'));
console.log(new Auto('Hummer EV', 2022, 'GMC'));



/*
PRO TIP 👉 Cuando utilices 'new' en JavaScript, 
asegúrate de que estás invocando una función 
constructora. Si olvidas usar 'new' al invocar 
una función constructora, el resultado podría 
ser inesperado y confuso. Como pro tip, siempre 
chequea que estás utilizando 'new' correctamente 
para evitar errores y mantener tu código limpio 
y efectivo.


RETO ℹ
Crea un nuevo objeto a partir de la clase 'Perro' 
con la propiedad 'nombre' como 'Firulais'.

function Perro(nombre) {
    this.nombre = nombre;
}

new Perro('Firulais');

*/