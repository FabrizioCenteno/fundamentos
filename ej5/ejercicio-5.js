// ejercicio 5

const codeDocument = document.querySelector('.codigo');
codeDocument.innerHTML = `
<pre>

const num = prompt('ingresa un número');
console.log(num % 2 == 0 ? 'par':'impar');
</pre>
`;


const num = prompt('ingresa un número');
console.log(num % 2 == 0 ? 'par':'impar');