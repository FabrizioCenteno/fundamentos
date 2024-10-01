// ejercicio 15

const max = prompt('número máximo');

function esPrimo(maximo){
    for(let i = 1; i <= maximo; i++) {
        let primo = true;
        if(i < 2){
            primo = false;
        }else{;
            for(let j = 2; j <= Math.sqrt(i); j++){
                if(i % j === 0){
                    primo = false;
                }
        }
    }
        console.log(`el número ${i} ${primo? 'es primo':'no es primo'}`);
    }
}
esPrimo(max);

