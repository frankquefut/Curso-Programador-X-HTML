// Bucle for: Imprimir números del 1 al 5
// console.log("Bucle for:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

console.log("------------------")

// Bucle for...of: Recorrer una lista de colores
// console.log("\nBucle for...of:");
const colores = ['rojo', 'verde', 'azul', 'amarillo'];
for (let color of colores) {
    console.log(color);
}
console.log("------------------")

// Bucle for...in: Recorrer propiedades de un objeto persona
// console.log("\nBucle for...in:");
const persona = {
    nombre: 'María',
    edad: 27,
    profesion: 'diseñadora'
};
for (let clave in persona) {
    console.log(`${clave}: ${persona[clave]}`);
}
console.log("------------------")

// Bucle while: Encontrar el número más cercano al cuadrado de 100
// console.log("\nBucle while:");
let num = 1;
while (num * num < 100) {
    num++;
}
console.log("El número más cercano a 100 cuyo cuadrado es menor que 100 es:", num);
console.log("------------------")

// Bucle do...while: Imprimir los números pares hasta el 10, imprimiento al menos uno.
// console.log("\nBucle do...while:");
let par = 2;
do {
    console.log(par);
    par += 2;
} while (par <= 10);
