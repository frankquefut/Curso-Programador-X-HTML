for(i = 1; i <= 5; i++){
    console.log(i);
}
console.log('----------------')




let colores =['rojo', 'verde', 'azul', 'amarillo'];

for(let color of colores){
    console.log(color);
}
console.log('----------------')



let usuario = {
    nombre: 'Maria',
    edad: 27,
    profesion: 'diseñadora'
};

for(let dato in usuario){
    console.log(dato + ': ' + (usuario[dato]));
}
console.log('----------------')



let numero = 1;

while(numero * numero < 100){
    numero++;
}
console.log('El numero mas cercano a 100 cuyo cuadrado es menor que 100 es: ' + numero);
console.log('----------------')



let par = 2;

do {
    console.log(par);
    par += 2;
}while(par <= 10);
console.log('----------------')