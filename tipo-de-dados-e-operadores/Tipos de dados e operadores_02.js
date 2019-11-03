/* 2. Crie uma função que receba 2 parâmetros 
e exiba o resultado e o resto da divisão entre eles; */

function calcularDivisao(valor1, valor2){
  let divisao = valor1 / valor2;
  
 let resto = valor1 % valor2;
  
  console.log('O resultado é: ' + divisao + 'e o resto é: ' + resto);
}

calcularDivisao(6,7);
