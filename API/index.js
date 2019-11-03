
/* 1) Crie uma API que utiliza o servidor express e exponha a porta 300
- npn -v para verificar a versão
- npn init para inicializar o projeto
- npn install express para instalar o express

*/

const express = require('express') // puxar outro arquivo 

const server = express(); //instanciar 

function checkUserInArray(req, res, next){
    const user = usuarios[req.params.idUser];
    if(!user){
        return res.status(400).json({error: 'Users index doesnt exists'});
    }
    req.user = user;
    return next();
}

function checkBoocksInArray(req, res, next){
    const book = books[req.params.idBooks];
    if(!book){
        return res.status(400).json({error: 'Books index doesnt exists'});
    }
    req.book = book;
    return next();
}

/* 2) Crie uma rota Get que responda "hello word" na rota '/' */
server.get('/', function (req, res) {

    res.send('hello word')
    
})

/* 3) Crie uma rota GET que retorne uma lista de usuários ao acessar a rota '/usuarios' */

const usuarios = ['Ana','Gabriela','Maria']
server.get('/usuarios', function (req, res) {

    res.json(usuarios)
    
})

/* 4) Crie uma rota GET que retorne um unico  */

server.get('/usuarios/:idUser', checkUserInArray, function (req, res) {
    const id =req.params.idUser;
    res.send(usuarios[id])
    
})


/* 5) Crie um endpoint GET que traga uma lista de livris ao acessar 'books' */

const books = ['A pequena sereia','O contador de historias','Os três porquinhos']
server.get('/books', function (req, res) {

    res.json(books)
    
})


/* 6) Crie uma rota GET que retorne um unico  */

server.get('/books/:idBooks', function (req, res) {
    const id =req.params.idBooks;
    res.send(books[id])
    
})

/* 7) Crie uma rota GET que retorne um user e um book */

server.get('/usuarios/:idUser/books/:idBooks', checkUserInArray, checkBoocksInArray, function (req, res) {
    const {idUser, idBooks} = req.params;  //descontrução
    
    /*const idUser = req.params.indexUser;
    const idBook = req.params.idBook;*/

    return res.json('Usuario: ' + usuarios[idUser] + ' Book: ' + books[idBooks])

})

const pais = ['Brasil','China','Argentina']

server.get('/country', (req, res,next) =>{ 
    const {id} = req.query; 
    
    res.send(pais[id]) 

    //http://localhost:3000/country?id=0
});
    


server.listen(3000);