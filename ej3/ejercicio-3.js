// ejercicio 3

const codeDocument = document.querySelector('.codigo');
codeDocument.innerHTML = `
<pre>
const persona = {
    nombre: 'fabrizio',
    edad: 19,
    muerto: false,
    presentacion: function(){
        console.log(\`Hola, mi nombre es ${this.nombre}. Tengo ${this.edad}\`)
    },
    amigos: ['Josué','Jeampier','Joel']
};
console.log(persona);
console.table(persona);
</pre>
`;


const persona = {
    nombre: 'fabrizio',
    edad: 19,
    muerto: false,
    presentacion: function(){
        console.log(`Hola, mi nombre es ${this.nombre}. Tengo ${this.edad}`)
    },
    amigos: ['Josué','Jeampier','Joel']
};
console.log(persona);
console.table(persona);