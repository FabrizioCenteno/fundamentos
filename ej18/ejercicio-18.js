// ejercicio 18
const frase = prompt('escribe una frase');


function operacion(frase){
    const arr = frase.split(" ");
    let mayor = arr[0];

    for(let i = 1; i < arr.length; i++){
        if(mayor.length < arr[i].length) mayor = arr[i];
    }

    return mayor
}
console.log(operacion(frase));