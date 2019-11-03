

function calcularTemperatura(temp){

    let maior = 0;
    let media = 0;
    let aux = 0;
    let menor = temp[0];
    let i = 0;

    for(i = 0; i < temp.length; i++){
        aux += temp[i];

        if (temp[i] > maior) {
            maior = temp[i];
        }
    
        if (temp[i] < menor) {
            menor = temp[i];
        }
    }
    media = aux/i;

    return ('O maior numero: ' + maior + ', menor numero: ' + menor + ', media dos numeros: '+ media);
}
temp = [1,2,3,4];

console.log(calcularTemperatura(temp));
