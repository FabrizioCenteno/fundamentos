// ejercicio 17

const numeros = [5, 11, 12, 42, 52312, 21];

function OrdenarDeMenorAMayor(numeros) {
    return numeros.sort((a, b) => a - b);
}
console.log(OrdenarDeMenorAMayor(numeros));