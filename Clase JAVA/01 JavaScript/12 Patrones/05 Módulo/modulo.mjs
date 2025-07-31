export function cuadrado(x) {
    privada(x * x);
}

export function removerDuplicados(lista) {
    privada([...new Set(lista)]);
}

function privada(x) {
    console.log(x);
}

export default removerDuplicados;
