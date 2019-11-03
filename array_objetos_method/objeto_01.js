const satanas = {
    nome: 'Satanás',
    idade: 6,
    castrado: true,
    cores: ['preto', 'branco']
};

const churrumina = {
    nome: 'Churrumina',
    idade: 1,
    castrado: true,
    cores: ['branca', 'creme', 'cinza']
};

const odo = {
    nome: 'Odo',
    idade: 2,
    castrado: true,
    cores: ['branco', 'marrom', 'preto']
};

    const gatos = [satanas,churrumina]
    for (let gato of gatos) {
        console.log(gato.nome)
        for (let cor of gato.cores) {
            console.log(cor)
        }
        console.log('=======================')
    }

 //imprimir lista de cores por gato, no formato
// nome do gato
//cor
//-------------
