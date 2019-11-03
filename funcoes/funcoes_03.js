/*3. Crie uma função que receba uma string, contendo nome e sobrenome, 
e retorne as inicias. Ex.: dado "Débora Borges", retorne "DB".*/

/*Obs: Substring (posicao inicial, posicao final)
Substr (quantidade de caracteres)*/

function receberNome(nome){
  
 let posicao = nome.indexOf(' ');
 return nome.charAt(0) + nome.substring(posicao+1, posicao+2)
}

let nome = prompt ('digite seu nome:');


console.log(receberNome(nome))
