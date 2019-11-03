function validarCatao(numCartao) {
    
    let numCartaoParse = numCartao.split('');

    const arrNum = numCartaoParse.map(function(i){
        return parseInt(i)
    })
    
    let digito = arrNum.pop();
    console.log('1- Digito do cartão: ' + digito)
    console.log('Array sem o ultimo digito: ' + arrNum)
    //===============================================================

    arrNum.reverse()
    console.log('Array revertido: ' + arrNum)
    
    //===============================================================

    const arrMap= arrNum.map(function (i,index) {     
        
        if (index % 2 == 0) {
            
            i = i*2;
        }

        if (i > 9) {
            
            return i -= 9;
        }
        return i;      
    })
    console.log(arrMap);


    let total = arrMap.reduce(function(anterior, atual) {
    return anterior + atual;
    }, 0)
    console.log("subTotal: " + total)

    total += digito

    console.log("Total: " +total)

    if ((total % 10) == 0){

        console.log("O cartão valido")

    }else{ 

        console.log("não é valido")
    }
}

validarCatao('4024007179089965');
