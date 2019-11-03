/*3. Crie uma função que recebe 2 parâmetros (altura e peso) e retorna o IMC;*/

function calcularIMC(peso, altura){

  let IMC = peso / (altura * altura);
  

  console.log(IMC);
}


var N1 = prompt ("Digite seu peso:")
var N2 = prompt ("Digite sua altura:")


calcularIMC(N1,N2);
