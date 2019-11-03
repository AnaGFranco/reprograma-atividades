/* 5. Altere a função que calcula IMC de maneira que o valor do IMC tenha apenas duas casas decimais. */

function calcularIMC(peso, altura){

    let IMC = peso / (altura ** 2);
    
    return (IMC.toFixed(2))
  }
  
  let N1 = prompt ("Digite seu peso:")
  let N2 = prompt ("Digite sua altura:")
  
  console.log(calcularIMC(N1,N2));
  
  