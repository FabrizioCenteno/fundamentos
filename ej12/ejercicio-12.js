// ejercicio 12
const codeDocument = document.querySelector('.codigo');
codeDocument.innerHTML = `
<pre>
const arr = [1,2,3,4,5,6,7,8,9];

function pares(arr){
   return  arr.filter( element => element % 2 == 0)
}

const arrayPares = pares(arr);
console.log(arrayPares);
</pre>

`;

const arr = [1,2,3,4,5,6,7,8,9];

function pares(arr){
   return  arr.filter( element => element % 2 == 0)
}

const arrayPares = pares(arr);
console.log(arrayPares);