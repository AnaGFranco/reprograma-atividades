/*6. Crie uma função que calcule quantos dias o usuário viveu, baseado na idade;*/

function calcularIdade(idade){
  
  return parseInt(idade)*365
}

let digitaIdade = prompt ('Quantos anos você tem?');

let idade = calcularIdade(digitaIdade);

console.log('Sua idade é: ' + idade)
