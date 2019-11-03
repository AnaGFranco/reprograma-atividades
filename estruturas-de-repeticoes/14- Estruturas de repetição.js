
function calcularFatorial(aux){
    resultado = aux;
   while (aux > 1) {
       
    aux --;
    resultado *= aux;

    
     }
    return resultado;
}
    console.log(calcularFatorial(10));
