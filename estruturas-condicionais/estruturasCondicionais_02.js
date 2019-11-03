/* 2. Palíndromos são palavras ou frases que podem ser lidas da esquerda para 
a direita ou da direita para a esquerda. Crie uma função que informe se uma 
palavra é uma palíndromo. */ 

function verificarPalindromo(palavra){

    let resultado = palavra.split('').reverse().join('');
    
    if (palavra === resultado){
      return 'É um palindromo';
    } else
     return 'Não é um palindromo'
   }
  
  
  var palavra = prompt ("Digite um valor:");
  
  alert(verificarPalindromo(palavra));
  