/* 2. Crie uma função que recebe uma palavra e ordena suas letras em ordem alfabética. */

function ordenarPalavra(palavra){
  
    return palavra.toString().split('').sort().join('');
    
  }
  
  console.log(ordenarPalavra('gabriela'))
  
  // juntar Join
  
  console.log(['ga','brie','la'].join(''));
  
  //split - separa
  