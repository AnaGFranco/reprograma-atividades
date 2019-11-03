
let valor = 1.99;

function CalcularValor(qtd,pago) {
    
    for ( i= 1; i <= 50; i++) {
    
        let calcular = i * valor;
    
        if (i == qtd) {
       
            console.log('Valor a pagar: ' + calcular + ', troco: ' + (pago - calcular) );
        }
    
    }

    
}

for ( i= 1; i <= 50; i++) {
    
    let calcular = i * valor;

    console.log(i + '- ' + calcular.toFixed(2));

}

CalcularValor(6,100)

 

