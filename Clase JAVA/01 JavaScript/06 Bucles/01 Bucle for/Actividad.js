
//for(let i = 0; i < 30; i++) {
   // console.log('<section></section>');
//}

/*let lista =['mexico', 'USA', 'china', 'monaco', 'francia'];

for(let i = 0; i < lista.length; i++){
    let pais = lista[i]

    if(pais === 'mexico') {
        console.log(pais + ' hay buena comida');
        break;
    }else{
        console.log(pais + ' es un pais')
    }
}*/

/*let indicedemonaco;

let lista =['mexico', 'USA', 'china', 'monaco', 'francia'];

for(let i = 0; i < lista.length; i++){
    let pais = lista[i]

    if(pais === 'monaco') {
        indicedemonaco = i;
        break;
    }
    
}*/



let lista =['mexico', 'USA', 'china', 'monaco', 'francia'];

for(let i = 0; i < lista.length; i++){
    let pais = lista[i]

    if(pais === 'USA') {
        continue;
    }
    console.log('Pais bueno: ' + pais);
}

