// ejemplo 8

const codeDocument = document.querySelector('.codigo');
codeDocument.innerHTML = `
<pre>
const min = prompt('ingresa el valor mínimo');
const max = prompt('ingresa el valor máximo');

function getRandom(min,max){
    return Math.floor(Math.random() * (Number(max) - Number(min) + 1)) + Number(min);
}

console.log(getRandom(min,max));
</pre>
`;


const min = prompt('ingresa el valor mínimo');
const max = prompt('ingresa el valor máximo');

function getRandom(min,max){
    return Math.floor(Math.random() * (Number(max) - Number(min) + 1)) + Number(min);
}

console.log(getRandom(min,max));