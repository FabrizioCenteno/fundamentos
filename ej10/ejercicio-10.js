// ejercicio 10

const codeDocument = document.querySelector('.codigo');
codeDocument.innerHTML = `
<pre>

const arr = [1,2,3,4,5,6,7];
let max = arr[0];

for(let i = 1; i < arr.length; i++){
    if(arr[i] > max) max=arr[i]; 
}

console.log(max);
</pre>
`;

const arr = [1,2,3,4,5,6,7];
let max = arr[0];

for(let i = 1; i < arr.length; i++){
    if(arr[i] > max) max=arr[i]; 
}

console.log(max);