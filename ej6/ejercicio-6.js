
// ejercicio 6

const inputNumero = document.getElementById('numero');
const inputImprimir = document.getElementById('imprimir'); 

inputImprimir.addEventListener('click', function(event) { 
event.preventDefault();
const valueInputNumero = inputNumero.value; 
console.log(valueInputNumero); 
});
