/* 13. Crie uma calculadora simples. */
function calcularCalculadora(n1,operador,n2){

    switch (operador) {
      case '-':
        return ('Reultado= ' + (n1 -= n2));
      case '+':
        return ('Reultado= ' + (n1 += n2));
      case '/':
        return ('Reultado= ' + (n1 /= n2));
      case '*':
        return ('Reultado= ' + (n1 *= n2));
      default:
        return("Código inválido");
    }       
    }
    
    console.log (calcularCalculadora(5,'-',3));