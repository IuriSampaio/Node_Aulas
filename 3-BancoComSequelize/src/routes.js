const express = require('express')

// instanciando o express com o módulo de rotas 
const routes = express.Router()

// instanciando o obj retornado pelo arquivo que faz contato com o banco
const alunoController = require('./controllers/aluno')

// no endereço -> localhost:3001/alunos --> será chamado o método store (que faz a inserção no BD)
routes.post("/alunos", alunoController.store)

// exportando a variavel rotas
module.exports = routes