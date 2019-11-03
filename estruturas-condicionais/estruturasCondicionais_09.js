/* 9. Escreva um código que receba um número (1-12), e diga qual mês e quantos dias ele tem. */
function verificarMes(mes){

    switch (mes) {
      case 1:
        return("Janeiro 31 dias");
      case 2:
        return("Fevereiro 30 dias");
      case 3:
        return("Março 31 dias");
      case 4:
        return("Abril 30 dias");
      case 5:
        return("Maio 31 dias");
      case 6:
        return("Junho 30 dias");
      case 7:
        return("Julho 31 dias");
      case 8:
        return("Agosto 31 dias");
      case 9:
        return("Setembro 30 dias");
      case 10:
        return("Outubro 31 dias");
      case 11:
        return("Novembro 30 dias");
      case 12:
        return("Dezembro 31 dias");
     default:
        return("Código inválido");
    }       
    }
    
    console.log (verificarMes(3))
    