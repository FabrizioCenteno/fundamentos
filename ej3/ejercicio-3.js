// ejercicio 3

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