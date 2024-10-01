// ejercicio 19
function calcularPromedio(numeros) {
    const suma = numeros.reduce((acc, num) => acc + num, 0);
    return suma / numeros.length;
}

const numeros = [5, 11, 12, 42, 52312, 21];
const promedio = calcularPromedio(numeros);
console.log(promedio);