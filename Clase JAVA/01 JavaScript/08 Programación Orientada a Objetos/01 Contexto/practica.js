/*
this.modelo = 5;



const info = () => {
        return 'Este es un auto ' + this.marca
        + ', ' + this.modelo + ' del año ' + this.año;
    }


let auto = {
    modelo: 'Modelo 3',
    año: 2021,
    marca: 'Tesla',
    info: info
};



console.log(auto.marca);
console.log(auto.info());*/






let auto = {
    modelo: 'Modelo 3',
    año: 2021,
    marca: 'Tesla',
    info: function () {
        return 'Este es un auto ' + this.marca
        + ', ' + this.modelo + ' del año ' + this.año;
    }
};



console.log(auto.marca);
console.log(auto.info());


/* Contexto
Aquí puedes ver un ejemplo de cómo funcionan las funciones flecha con el 
contexto. Al utilizar this en una función flecha, las funciones flecha 
apuntará al contexto de la función exterior/principal en la que está 
presente.

Como recomendación general es mejor evitar usar funciones flechas con el 
contexto ya que su interacción no es muy intuitiva. Usa funciones flecha 
para funciones simples que no interactúen con su contexto.  


PRO TIP 👉 Siempre prueba tu código al trabajar con this ya que puedes 
estar apuntando al contexto equivocado.
*/