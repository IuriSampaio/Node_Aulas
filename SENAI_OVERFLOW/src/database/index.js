// importando sequelize
const Squelize = require('sequelize');
// pegando o obj de configuração exportado pelo arquivo 
const dbConfig = require('../../config/config.js');

const Aluno = require("../model/Aluno");
const Post = require("../model/Post");

// criando a conexão com banco pelo sequelize passando o objeto de conexão criado 
const conexao  = new Squelize(dbConfig);


Aluno.init(conexao);

Post.init(conexao);

// exportando a conexçao
module.exports =conexao; 