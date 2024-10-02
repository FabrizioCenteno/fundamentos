// ejerciio 20
const codeDocument = document.querySelector('.codigo');
codeDocument.innerHTML = `

<pre>

function convertirCadena(cadena) {
    const mayusculas = cadena.toUpperCase();
    const minusculas = cadena.toLowerCase();
    
    console.log("Mayúsculas: " + mayusculas);
    console.log("Minúsculas: " + minusculas);
}

const texto = "Hola Mundo";
convertirCadena(texto);

</pre>
`

function convertirCadena(cadena) {
    const mayusculas = cadena.toUpperCase();
    const minusculas = cadena.toLowerCase();
    
    console.log("Mayúsculas: " + mayusculas);
    console.log("Minúsculas: " + minusculas);
}

const texto = "Hola Mundo";
convertirCadena(texto);