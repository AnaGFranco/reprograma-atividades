/* 11. Escreva um código que receba três ângulos e  determine se eles 
formam um triângulo válido.  Em um triângulo válido, a soma dos três
 ângulos é igual a 180º. */
 
function verificarTriangulo(a1,a2,a3){
  
  let soma = a1 + a2 + a3;

  if (soma == 180){
    return ('Tringulo valido ' + soma);
  }else {
    return ('Tringulo não valido ' + soma);
  }
  }

console.log(verificarTriangulo(90,30,50))
