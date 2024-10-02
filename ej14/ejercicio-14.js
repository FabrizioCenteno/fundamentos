// ejercicio 14

const codeDocument = document.querySelector('.codigo');
codeDocument.innerHTML = `
<pre>

const palabra = prompt('ingresa una palabra');
let laVuelta = '';

function comprobar(palabra){
    for( let i = palabra.length - 1; i >= 0; i--){
        laVuelta += palabra[i];
    }
    console.log(\`${palabra} == ${laVuelta} ? ${palabra == laVuelta ? 'son iguales' : 'no son iguales'}\`);
}

comprobar(palabra);
</pre>
`;

const palabra = prompt('ingresa una palabra');
let laVuelta = '';

function comprobar(palabra){
    for( let i = palabra.length - 1; i >= 0; i--){
        laVuelta += palabra[i];
    }
    console.log(`${palabra} == ${laVuelta} ? ${palabra == laVuelta ? 'son iguales' : 'no son iguales'}`);
}

comprobar(palabra);