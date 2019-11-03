

function padrao(qtd){

for (let i = qtd; i >= 1; i--) {
    let valor = '*'
    console.log(valor.repeat(i));
    return valor
}

}
console.log(padrao(7))