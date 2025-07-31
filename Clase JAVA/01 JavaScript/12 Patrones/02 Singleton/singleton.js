let contar = 0;

const contador = {

    getInstancia() {
        return this;
    },

    getContar() {
        return contar;
    },

    incrementar() {
        return ++contar;
    }
}

Object.freeze(contador);

export { contador };






