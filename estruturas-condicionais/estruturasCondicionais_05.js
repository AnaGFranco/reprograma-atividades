/* 5. Baseado na tabela abaixo, retorne a classificação de um produto.

Código	    Classificação
1	        Alimento não-perecível
2,3 ou 4	Alimento perecível
5 ou 6  	Vestuário
7	        Higiene Pessoal
8 até 15	Limpeza e Utensílios Domésticos

Qualquer outro código	Código inválido  */ 

function verificarCodigo(codigo){
 
    let x = parseInt(codigo)
    
    switch (x) {
      case 1:
        console.log("Alimento não-perecível");
        break;
      case 2:
      case 3:
      case 4:
        console.log("Alimento perecível");
        break;
      case 5:
      case 6:
        console.log("Vestuário");
        break;
      case 7:
        console.log("Higiene Pessoal");
        break;
      case 8:
      case 9:
      case 10:
      case 11:
      case 12:
      case 13:
      case 14:
      case 15:
        console.log("Limpeza e Utensílios Domésticos");
        break;
      default:
        console.log("Código inválido");
    }
    
    }
    
    let numero = prompt('Digite um número inteiro: ')
    verificarCodigo(numero)
    