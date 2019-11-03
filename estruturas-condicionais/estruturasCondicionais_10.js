/* 10. Utilizando switch-case, receba uma letra e determine se é uma vogal ou consoante. */
function verificarLetra(letra){

    switch (letra) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        return("Vogal");
     default:
        return("Consoante");
    }       
    }
    
    console.log (verificarLetra('a'))