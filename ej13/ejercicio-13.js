// ejercicio 13

const codeDocument = document.querySelector('.codigo');
codeDocument.innerHTML = `
<pre>
const frase = prompt('ingresa una frase');
const palabras = frase.split(" ");
console.log("la frase \"" + frase + "\" tiene " + palabras.length + " palabras");

</pre>
`;

const frase = prompt('ingresa una frase');
const palabras = frase.split(" ");
console.log("la frase \"" + frase + "\" tiene " + palabras.length + " palabras");