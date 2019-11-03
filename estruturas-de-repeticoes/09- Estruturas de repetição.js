
 
let i = 1;
let teste = false;
let num = 7;
let cont = 0;

do {  
    
if (num % i == 0) {
    cont= cont + 1;
} 
     i++

} while (i<=num)

if (cont == 2) {
    console.log ('é primo');
} else {
    console.log ('não é primo');
}
