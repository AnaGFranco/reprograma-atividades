/*7. Crie uma função que calcule quantos batidas 
por dia dá um coração, considerando que, ele bate a 70 bpm;*/

//=====================================Calcular Idade
function calcularIdade(idade){
  
  return parseInt(idade)*365
}

let digitaIdade = prompt ('Quantos anos você tem?');

let diasIdade = calcularIdade(digitaIdade);

console.log('Sua idade é: ' + diasIdade)

//=====================================Calcular bpm DIA
function calcularBatidas(){
    
    return 1440 * 70;
  }
  
  
  let batidas = calcularBatidas();
  
  console.log('Bateu por dia: ' + batidas + 'bpm.')
//=====================================Calcular bpm VIDA
  
  function calcularBatidasVida(idadeDias, batidadaDia){
      
    return idadeDias * batidadaDia;
  }
  
  let quantidadeBatidas = calcularBatidasVida(diasIdade,batidas);
  console.log('Seu coração bateu' + quantidadeBatidas + ' vezes bpm durante sua vida.')
  
