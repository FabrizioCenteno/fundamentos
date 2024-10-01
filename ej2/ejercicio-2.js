// ejercicio 2
const arr = [];
for(let i = 0; i < 100; i++){
    arr[i] = Math.round(Math.random() * 10);
}
console.table(arr);

const result  = arr.filter( n => n > 5 );

console.table(result);