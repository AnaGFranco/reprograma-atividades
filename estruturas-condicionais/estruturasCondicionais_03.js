/* 3. Faça uma função que dado um número, retorne se ele é par ou ímpar. */ 

function calcularParOuImpar(numero){
  
    let resultado = parseInt(numero % 2)
     
     if (resultado === 0){
       return "É par."
     }else {
       return "É ímpar."
     }
     }
   
   let numero = prompt('Digite um número inteiro: ')
   alert(calcularParOuImpar(numero))
   