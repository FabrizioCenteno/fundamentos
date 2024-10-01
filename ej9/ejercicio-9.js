// ejercicio 9

const arr = prompt('ingresa la palabra pa darle vuelta');
// let resultado = '';

// for(let i=arr.length-1; i >= 0; i--){
//     resultado+=arr[i];
// }
// console.log(resultado);

function revertirCadena(cadena) {
    return cadena.split('').reverse().join('');
}