// Ejercicio de Javascript Interactivo para Alumnos

// Parte 1: Operadores Comparativos de Números

let numero1 = 10;
let numero2 = 5;

// Comparación de números
console.log("¿El número 1 es mayor que el número 2?", numero1 > numero2);
console.log("¿El número 1 es menor que el número 2?", numero1 < numero2);
console.log("¿El número 1 es igual al número 2?", numero1 === numero2);

// Parte 2: Operadores Comparativos de Texto

let texto1 = "Hola";
let texto2 = "Hola Mundo";

// Comparación de texto
console.log("¿El texto 1 es igual al texto 2?", texto1 === texto2);

// Parte 3: Operadores de Valor vs Referencia

// Variables con objetos
let obj1 = { nombre: "Juan" };
let obj2 = { nombre: "Juan" };

// Comparación de objetos (referencia)
console.log("¿Los objetos son iguales?", obj1 === obj2);

// Parte 4: Operadores Lógicos

let verdadero = true;
let falso = false;

// Operadores lógicos (AND, OR)
console.log("AND lógico:", verdadero && falso); // Debe dar falso
console.log("OR lógico:", verdadero || falso); // Debe dar verdadero

// Parte 5: Operadores Aritméticos

let operando1 = 10;
let operando2 = 3;

// Operaciones aritméticas
console.log("La suma de 10 + 3:", operando1 + operando2);
console.log("La resta de 10 - 3:", operando1 - operando2);
console.log("La multiplicación de 10 * 3:", operando1 * operando2);
console.log("La división de 10 / 3:", operando1 / operando2);
console.log("10 módulo de 3:", operando1 % operando2);
