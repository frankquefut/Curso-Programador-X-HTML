//import { sumar, PI, Servicio} from "./export.js";

//let resultado = sumar(1, 2);
//console.log(resultado);
//console.log(PI);
//const servicio = new Servicio();
//console.log(servicio.restarTres(PI));

//import cualquierNombre from './export.js';
//console.log(new cualquierNombre().restarTres(4));
import * as todo from './export.js';

console.log(todo.sumar(4, 5)); 
console.log(todo.Servicio); 



/*
Importar

PRO TIP 👉 Evita importar más de lo que 
necesitas en JavaScript. En lugar de importar 
un paquete o módulo completo, trata de importar 
solo las funciones o componentes específicos 
que necesitas. Esto puede mejorar la eficiencia 
de tu código y también puede ayudar a mantener 
la claridad y la organización.


RETO ℹ
Importa la función 'conectar' desde el archivo 
'bluetooth.js' y utilízala pasando la url.


import {conectar} from './bluetooth.js';

const url = 'https://academia.x/bt/server';

conectar(url);
*/