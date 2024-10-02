// ejercicio 2
const codeDocument = document.querySelector('.codigo');
codeDocument.innerHTML = `
<pre>

const arr = [];
for(let i = 0; i < 100; i++){
    arr[i] = Math.round(Math.random() * 10);
}
console.table(arr);

const result  = arr.filter( n => n > 5 );

console.table(result);

</pre>
`;

const arr = [];
for(let i = 0; i < 100; i++){
    arr[i] = Math.round(Math.random() * 10);
}
console.table(arr);

const result  = arr.filter( n => n > 5 );

console.table(result);