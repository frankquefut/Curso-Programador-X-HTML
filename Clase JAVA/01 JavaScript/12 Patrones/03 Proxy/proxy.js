const persona = {
    nombre: "Oswaldo Guayasamín",
    edad: 80
};

const mensajero = new Proxy(persona, {
    get: (objeto, propiedad) => {
        console.log(`El valor es ${Reflect.get(objeto,propiedad)}`);
    },
    set: (objeto, propiedad, valor) => {
        if (!valor) { throw new Error('Necesita un valor!'); }
        console.log(`Cambiado de ${Reflect.get(objeto,propiedad)} a ${valor}`);
        Reflect.set(objeto, propiedad, valor);
    }
});

mensajero.nombre;
mensajero.nombre = "Fito Páez";
mensajero.nombre = "";