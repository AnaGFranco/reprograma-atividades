/* 1. Crie um código que retorne a quantidade de pontos que seu time fez de 
acordo com o resultado do jogo. (Se o seu time venceu, ele recebe 3 pontos.
 Se o resultado foi empate, ele recebe 1 ponto. Se ele perdeu, não recebe nada.) */ 

 function calcularPonto(resultado){

    if (resultado === 'v') {
      return '3 pontos';
    } else if (resultado === 'e') {
      return '1 pontos'
    } else if (resultado === 'd') {
      return '0 pontos'
    } else {
     return 'Resultado desconhecido'
    }
  }
    console.log(calcularPonto('v'));
    console.log(calcularPonto('d'));
    console.log(calcularPonto('e'));

  /*
  
  var resultado = prompt ("Digite um valor:")
  
  switch (resultado) {
    case 'v':
      console.log(calcularPonto(resultado));
      break;
    case 'e':
      console.log(calcularPonto(resultado));
      break;
    case 'd':
      console.log(calcularPonto(resultado));
      break;
    default:
      console.log("Resultado desconhecido");
      break;
  }
  */
  