// ejercicio 7
const codeDocument = document.querySelector('.codigo');
codeDocument.innerHTML = `
<pre>
const vocales = ['a','e','i','o','u','A','E','I','O','U'];
let contador = 0;

const palabra = prompt('ingresa una palabra');

function encontrar(palabra){
    for(let i = 0; i < palabra.length; i++){
        if(vocales.includes(palabra[i])){
            contador++;
        }
    }
    console.log(contador);
}
encontrar(palabra);
</pre>
`;

const vocales = ['a','e','i','o','u','A','E','I','O','U'];
let contador = 0;

const palabra = prompt('ingresa una palabra');

function encontrar(palabra){
    for(let i = 0; i < palabra.length; i++){
        if(vocales.includes(palabra[i])){
            contador++;
        }
    }
    console.log(contador);
}
encontrar(palabra);