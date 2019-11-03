/* 8. Escreva um código que receba um número (1-7) e devolva o dia da semana correspondente. */

function verificarDiaSemana(dia){

    switch (dia) {
      case 1:
        return("Domingo");
      case 2:
        return("Segunda");
      case 3:
        return("Terça");
      case 4:
        return("Quarta");
      case 5:
        return("Quinta");
      case 6:
        return("Sexta");
      case 7:
        return("Sabado");
      default:
        return("Código inválido");
    }       
    }
    
    console.log (verificarDiaSemana(3))
    