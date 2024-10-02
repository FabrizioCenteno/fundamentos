// ejercicio 4

const codeDocument = document.querySelector('.codigo');
codeDocument.innerHTML = `
<pre>
function suma(){
    const a = prompt('primer número ?');
    const b = prompt('segundo número ?');

    console.log(Number(a) + Number(b));

}
suma();
</pre>
`;


function suma(){
    const a = prompt('primer número ?');
    const b = prompt('segundo número ?');

    console.log(Number(a) + Number(b));

}
suma();