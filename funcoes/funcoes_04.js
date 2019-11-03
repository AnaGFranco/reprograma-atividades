
/* 4. Crie uma função que receba a quantidade de bilhetes vendidos em um concurso e sorteie um bilhete. */
function sortearBilhete(bilhetes){

  return Math.floor(Math.random() * parseInt(bilhetes))

}

let sorteio = prompt('Digite a quantidade de bilhetes vendidos: ')

console.log(sortearBilhete(sorteio))
