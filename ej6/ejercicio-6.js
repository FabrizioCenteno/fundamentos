
// ejercicio 6

const codeDocument = document.querySelector('.codigo');
codeDocument.innerHTML = `
<pre>

const inputNumero = document.getElementById('numero');
const inputImprimir = document.getElementById('imprimir'); 

inputImprimir.addEventListener('click', function(event) { 
    event.preventDefault();
    const valueInputNumero = inputNumero.value; 
    console.log(valueInputNumero); 
});
</pre>

`;

const inputNumero = document.getElementById('numero');
const inputImprimir = document.getElementById('imprimir'); 

inputImprimir.addEventListener('click', function(event) { 
event.preventDefault();
const valueInputNumero = inputNumero.value; 
console.log(valueInputNumero); 
});
