
let valor = 1.99;

for ( i= 1; i <= 50; i++) {
    
    let calcular = i * valor;

    console.log(i + '- ' + calcular.toFixed(2));

 }


 let num = 2;

for ( i= 1; i <= num; i++) {
   
    if ((num % i) === 0) {
        console.log ('não é primo');
    }else{
        console.log ('é primo');
    }

 }
 