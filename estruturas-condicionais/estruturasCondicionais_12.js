/* 12. Vamos reescrever a função de Báskara. Para isso temos que verificar atráves de 
delta se é possível calcular x' e x". Se delta for menor que zero, a equação não tem 
raízes. Se delta for igual a zero, a equação tem uma raiz. Se delta for maior que zero, 
a equação tem duas raízes.*/

function calcularDelta(a,b,c){

  return b**2 - 4*a*c;
  
}

function verificarDelta(delta){
    
  if (delta < 0){
    return('Não tem raiz, delta= ' + delta);
  }else if (delta == 0){
    return('Tem uma raiz, delta = ' + delta);
  }else{
     return('Tem duas raizes, delta = ' + delta);
  }
  }

  delta = calcularDelta(4,5,1);
  console.log(verificarDelta(delta));