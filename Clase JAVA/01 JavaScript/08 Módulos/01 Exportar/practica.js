export function sumar(a, b) {
    return a + b;

}

export const PI = 3.14;

export class Servicio {

    tres = 3;

    restarTres(num) {
        return num - 3
    }
}

export default Servicio;


/*

Exportar

PRO TIP 👉 Al utilizar Exportar en JavaScript, 
evita la confusión entre export default y 
exportaciones con nombre. Cuando usas export 
default, asegúrate de importarlo sin las llaves {}. 
Cuando usas exportaciones con nombre, asegúrate de 
importarlo con las llaves {}. Esto evitará errores 
de "no se encuentra la función o variable" más adelante.

RETO ℹ
Exporta esta función.

export function eliminarEspacios(texto) {
	return texto.replace(/\s+/g, '');
}

*/