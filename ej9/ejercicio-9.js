// ejercicio 9

const codeDocument = document.querySelector('.codigo');
codeDocument.innerHTML = `
<pre>

const arr = prompt('ingresa la palabra pa darle vuelta');
function revertirCadena(cadena) {
    return cadena.split('').reverse().join('');
}
revertirCadena(arr);
</pre>
`;

const arr = prompt('ingresa la palabra pa darle vuelta');
// let resultado = '';

// for(let i=arr.length-1; i >= 0; i--){
//     resultado+=arr[i];
// }
// console.log(resultado);

function revertirCadena(cadena) {
    return cadena.split('').reverse().join('');
}
revertirCadena(arr);