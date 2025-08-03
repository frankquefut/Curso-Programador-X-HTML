// Objetos

//let objeto = { 'uno': 1, 'dos dos': 2}

let objeto = {
    numero: 1,
    texto: 'texto',
    lista: [],
    boolean: true,
    objeto: {
        objeto2: 'Hola'
    }
};
//console.log(objeto.numero);
//console.log(objeto.objeto.objeto2);
//console.log(objeto.texto);
//console.log(objeto['objeto']['objeto2 dad']);
delete objeto['objeto'];
console.log(objeto);


//considerar "Mutaciones"

let usuario = {
    nombre: 'Francisco Arturo',
    apellidos: 'Aragon Sanchez',
    alias: 'frankquefut',
};

/*let numero1 = 1;
let numero2 = numero1;
numero2 = 3;
console.log(numero1, numero2);*/

let usuario2 = JSON.parse(JSON.stringify(usuario));
usuario2.alias = 'frankquefut z';
console.log(usuario);
console.log(usuario2);



//PRO TIP 👉 El error más común cometido por los nuevos programadores al usar objetos en JavaScript
//  es la confusión entre la referencia y copia de objetos. Mi consejo es: siempre recuerda que cuando asignas 
// un objeto a una nueva variable o pasas un objeto a una función, estás asignando una referencia a ese objeto, 
// no una copia. Si modificas el objeto a través de la nueva variable o en la función, también cambiarás
//  el objeto original. Para evitar esto, puedes usar métodos como Object.assign() o el operador de
//  propagación para crear una copia superficial del objeto.
