const express = require('express')

// instanciando o express com o módulo de rotas 
const routes = express.Router()

// instanciando o obj retornado pelo arquivo que faz contato com o banco
const alunoController = require('./controllers/aluno');
const postController = require('./controllers/post');
const comentarioController = require('./controllers/comentario');
const sessaoController = require('./controllers/sessao');

const autorizacao = require("./middlewares/altorizacao")
//////////////////PUBLICa
routes.post("/alunos", alunoController.store)

///// ROTAS DE AUTENTICACAO
routes.post("/sessao",sessaoController.store);

routes.use(autorizacao);

///// ROTAS DO CURD DE ALUNOS 
routes.get("/alunos",alunoController.listar)
routes.get("/alunos/:id",alunoController.buscarPorId)
// no endereço -> localhost:3001/alunos --> será chamado o método store (que faz a inserção no BD)

///// ROTAS DE POSTAGEM
routes.get("/home",postController.index)
routes.get("/home/:id",postController.indexById)
routes.post("/home",postController.store)
/////////// ROTAS DE COMENTARIOS 
routes.post("/home/:postId/comment",comentarioController.store)
routes.get("/home/:postId/comment",comentarioController.index)

// exportando a variavel rotas
module.exports = routes