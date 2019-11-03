/*7. Escreva um código que receba dois número e determine qual o maior entre eles.*/

function verificarValor(N1,N2){
  
 let x = parseInt(N1);
 let y = parseInt(N2);
  if (x > y){
    return ('Valor maior é N1: ' + x);
  }else {
    return ('Valor maior é N2: ' + y);
  }
  }

console.log(verificarValor(10,50))
