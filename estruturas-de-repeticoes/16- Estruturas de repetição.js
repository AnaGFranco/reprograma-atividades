
function caraCoroa(qtd) {
    var cara = 0
    var coroa = 0
    var i = 0

    while (i < qtd) {
        i++;
        if (Math.random() >= 0.5) {
            coroa++;
        } else {
            cara++;
        }
    }
    return 'Cara: ' + cara + ' Coroa: ' + coroa;
}
console.log(caraCoroa(5))