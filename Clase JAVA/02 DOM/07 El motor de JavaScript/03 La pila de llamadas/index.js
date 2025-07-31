function multiplicar(a, b) {
    return a * b;
}

function cuadrado(a) {
    return multiplicar(a, a);
}

function imprimirCuadrado(a) {
    const resultado = cuadrado(a);
    console.log(resultado);
}

imprimirCuadrado(4);

// Call Stack
// []
// [imprimirCuadrado]
// [imprimirCuadrado, cuadrado]
// [imprimirCuadrado, cuadrado, multiplicar]
// [imprimirCuadrado, cuadrado, multiplicar, a * b]
// [imprimirCuadrado, cuadrado, multiplicar]
// [imprimirCuadrado, cuadrado]
// [imprimirCuadrado, console.log]
// [imprimirCuadrado]
// []