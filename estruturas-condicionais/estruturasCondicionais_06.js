/* 6. Baseado na tabela abaixo, escreva um algoritmo que leia o código do item adquirido pelo consumidor e a
 quantidade, calculando e mostrando o valor a pagar. A mensagem de retorno deve conter o produto, a quantidade 
 e o valor total a pagar.

Código	Produto	Preço Unitário   (R$)
100	    Cachorro quente	       R$ 1,70
101   	Bauru Simples	         R$ 2,30
102	    Bauru com ovo          R$ 2,60
103     Hamburguer	           R$ 2,40
104	    Cheeseburguer	         R$ 2,50
105     Refrigerante           R$ 1,00
*/

function verificarValorTotal(codigo,quantidade){

switch (codigo) {
  case 100:
    valor =  1.70;
    total = valor * quantidade;
    return ('Cachorro quente custa: R$' + valor + ' quantidade: ' + quantidade + ' total: ' + total);
    break;
  case 101:
    valor = 2.30;
    total = valor * quantidade;
    return ('Bauru Simplescusta: R$' + valor + ' quantidade: ' + quantidade + ' total: ' + total);
    break;
  case 102:
    valor = 2.60;
    total = valor * quantidade;
    return ('Bauru com ovo custa: R$' + valor + ' quantidade: ' + quantidade + ' total: ' + total);
    break;
  case 103:
    valor = 2.40;
    total = valor * quantidade;
    return ('Hamburguer custa: R$' + valor + ' quantidade: ' + quantidade + ' total: ' + total);
    break;
  case 104:
    valor = 2.50;
    total = valor * quantidade;
    return ('Cheeseburguer custa: R$' + valor + ' quantidade: ' + quantidade + ' total: ' + total);
    break;
  case 105:
    valor = 1.0
    total = valor * quantidade;
    return ('Refrigerante custa: R$' + valor + ' quantidade: ' + quantidade + ' total: ' + total);
    break;
  default:
    return("Código inválido");
}
}
console.log (verificarValorTotal(200,4))
