/* 4. Faça uma função que dado um número, retorne a classificação do ângulo. 
(Ângulo agudo: ângulo com medida maior que 0° menor que 90°; Ângulo reto:
ângulo com medida igual a 90°; Ângulo obtuso: ângulo com medida maior que 
90° e menor que 180°; Ângulo raso: ângulo com medida igual a 0° ou 180°;
Ângulo Côncavo: ângulo com medida entre 180° e 360°; Ângulo completo:
ângulo com medida igual a 360°). */ 

function verificarAngulo(x){
 
    if (x > 0 && x < 90){
      console.log(' ngulo agudo')
    } else if (x == 90){
    console.log(" ngulo reto")
    } else if (x > 90 && x < 180){
    console.log(" ngulo obtuso")
    } else if (x = 0 || x - 180){
    console.log(" ngulo raso")
    } else if (x > 180 || x < 360){
    console.log(" ngulo Côncavo:")
    } else if (x == 360){
    console.log(" ngulo completo");
    }else{
    console.log("Não encontrado");
    }
  }
  
  let numero = prompt('Digite um número inteiro: ')
  verificarAngulo(numero)
  
  