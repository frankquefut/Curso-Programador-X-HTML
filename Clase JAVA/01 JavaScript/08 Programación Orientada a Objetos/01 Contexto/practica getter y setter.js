let persona = {
	_nombre: '',
	_edad: 0,
        
    get datos() {
        return this._nombre + ' ' + this._edad;
    },
    set datos(valor) {
        const splitValor = valor.split(' ');
        this._nombre = splitValor[0];
        this._edad = splitValor[1];
    }

};


/*
Getter y Setter

Getter y Setter es un tema más avanzado y no muy común en la práctica pero te permite 
llamar métodos como propiedades. Para esto usamos la palabras reservadas get y set.

get significa obtener y set significa establecer.

get te permite llamar un método personalizado que está vinculado
a un objeto al leerlo como propiedad.
set te permite llamar un método personalizado que está vinculado 
al objeto al modificarlo como propiedad.

PRO TIP 👉 Evita usar getters y setters para simplemente obtener o establecer un valor. 
Utilízalos cuando necesites agregar lógica adicional o validación durante la obtención o 
asignación de un valor. Un simple acceso a una propiedad no justifica getters y setters.
*/