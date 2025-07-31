// Ejercicio de condicionales en JavaScript sin utilizar prompt

// Ejemplo de condicional if...else
let edad = 20;

if (edad >= 18) {
    console.log("Eres mayor de edad.");
} else {
    console.log("Eres menor de edad.");
}

// Ejemplo de condicional switch
let acción = "crear";

switch (acción) {
    case "crear":
        console.log("La acción es crear.");
        break;
    case "borrar":
        console.log("La acción es borrar.");
        break;
    case "actualizar":
        console.log("La acción es actualizar.");
        break;
    case "colocar":
        console.log("La acción es colocar.");
        break;
    default:
        console.log("Acción no reconocida.");
}


// Ejemplo de operador ternario
let numero = 7;

let esPar = (numero % 2 === 0) ? "es par" : "es impar";
console.log(`El número ingresado ${esPar}.`);
