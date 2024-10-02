// ejercicio 17
const codeDocument = document.querySelector('.codigo');

codeDocument.innerHTML = `
<pre>
const numeros = [5, 11, 12, 42, 52312, 21];

function OrdenarDeMenorAMayor(numeros) {
    return numeros.sort((a, b) => a - b);
}
console.log(OrdenarDeMenorAMayor(numeros));

</pre>

`;
const numeros = [5, 11, 12, 42, 52312, 21];

function OrdenarDeMenorAMayor(numeros) {
    return numeros.sort();
}
console.log(OrdenarDeMenorAMayor(numeros));