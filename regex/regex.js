// 01: faça uma função que retorne se uma dada string contém a letra h nela

    // function retornarString(palavra) {
    //         const regex = /h/
    //         return regex.test(palavra)
        
    // }

    // console.log(retornarString(("batalha"))

// 02: altere sua função para que ela aceite maiuscula e minuscula (case insensitive)

// function retornarStringIgnor(palavra) {
//     const regex = /h/i
//     return regex.test(palavra)

// }

// console.log(retornarStringIgnor("batalha"))



// 03: altere sua função para que ela retorne se a string
// termina com `a` ou comece com `b`
// aceitando maiuscula e minuscula tambem
// function retornarComOU(palavra) {
//     const regex = /a$|^b/i
//     return regex.test(palavra)

// }

// console.log(retornarComOU("batalha"))

// DESAFIO: altere sua função pra verificar a string contem números

function retornarNumero(palavra) {
    const regex = /\d+/
    //[0-9] no lugar do D
    console.log(palavra)
    return regex.test(palavra)

}

console.log(retornarNumero("batalha21"))