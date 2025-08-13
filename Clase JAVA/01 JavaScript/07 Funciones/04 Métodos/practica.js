// Metodos
// log es un metodo
// Este metodo me permite imprimir un 'Argumento'
console.log(3);


// Texto  toUpperCase es el "Metodo"
// Se podria decir que estos metodos, son funciones
// Todo en JS es un objeto, osea puedes pensar en console como un objeto
//y en texto como un objeto, ahora creemos nuestros
//propios metodos para nuestraos objetos

/*let texto = 'hola';
console.log(texto.toUpperCase());*/

let perro = {
    nombre: 'firulais',
    ladra: function() {
        console.log('woof!');
    }
}

perro.ladra();

/* objeto = perro, propiedades = nombre y ladra
, pero ladra, al ponerle una funcion, deja de ser
propiedad y se convierte en un metodo 
por eso perro.ladra es perro objeto y ladra un metodo 
hay metodos escondidos, tu no sabes como esta contruido
log o toUppercase, pero sabes lo que hacen y asi
los usas o los creas, puedes crea o usar o ambas, funciones
y metodos que no necesariamente sabes como estan
implementados*/
