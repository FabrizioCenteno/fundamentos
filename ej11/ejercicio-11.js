// //ejercicio 11
// const arr= [];

// // utilidades
// function getRandom(min,max){
//     return Math.floor(Math.random() * (Number(max) - Number(min) + 1)) + Number(min);
// }

// // rellenando el array arr
// for(let i = 0; i < 100; i++) arr.unshift(getRandom(1,20));
// console.log(arr);

// // rellenando el array unicos
// let unicos = new Set(arr);
// console.log(unicos);
// let contador = 0;

// for(let unico of unicos){
//     for(let i = 0;i < arr.length; i++){
//         if(unico == arr[i]) contador++;
//     }
//     console.log(`número: ${unico} | contador: ${contador}`);
//     contador = 0;
// }

// const arr= [];

// // utilidades
// function getRandom(min,max){
//     return Math.floor(Math.random() * (Number(max) - Number(min) + 1)) + Number(min);
// }

const arr= [];

// utilidades
function getRandom(min,max){
    return Math.floor(Math.random() * (Number(max) - Number(min) + 1)) + Number(min);
}

// rellenando el array arr
for(let i = 0; i < 100; i++) arr.unshift(getRandom(1,20));
console.log(arr);

const contadores = new Array(20).fill(0);

for(let i = 0;  i < arr.length; i++){
    contadores[arr[i-1]]++;
}
console.log(contadores);