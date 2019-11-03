/*5. Refatore seu código da questão anterior, de maneira que o novo código possua 3 funções:

a. A primeira recebe 3 parâmetros e calcula apenas o resultado de "delta";

b. A segunda recebe 3 parâmetros e calcula o resultado de x';

c. A terceira recebe 3 parâmetros e calcula o resultado de x";*/

function calcularDelta(a,b,c){

    return b**2 - 4*a*c;
    
  }
  
  function calcularx1(a,b,delta){
   
    let x1 = (-b + Math.sqrt(delta)) / 2*a;
    
      return (x1);
    
  }
  
  
  function calcularx2(a,b,delta){
   
    let x2 = (-b - Math.sqrt(delta)) / 2*a;
    
    return (x2);
    
  }
    
  
  let delta= calcularDelta(1,5,4);
  calcularx1(1,5,delta);
  calcularx2(1,5,delta);
  