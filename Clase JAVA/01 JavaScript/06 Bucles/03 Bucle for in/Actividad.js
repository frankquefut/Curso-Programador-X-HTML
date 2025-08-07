const persona = {nombre: 'Juan', edad: 25, ciudad: 'Madrid'};
for(let prop in persona){
    console.log(prop + ': ' + persona[prop]);
}