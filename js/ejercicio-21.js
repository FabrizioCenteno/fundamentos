// ejercicio 21
function filtrarMayoresQue(array, valor) {
    return array.filter(numero => numero > valor);
}

const numeros = [1, 3, 5, 7, 9, 11];
const valor = 5;
const resultado = filtrarMayoresQue(numeros, valor);

console.log(resultado); // [7, 9, 11]