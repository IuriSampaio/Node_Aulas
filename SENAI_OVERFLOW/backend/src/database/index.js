// importando sequelize
const Squelize = require('sequelize');
// pegando o obj de configuração exportado pelo arquivo 
const dbConfig = require('../../config/config.js');

const Aluno = require("../model/Aluno");
const Post = require("../model/Post");
const Comentario = require("../model/Comentarios");

// criando a conexão com banco pelo sequelize passando o objeto de conexão criado 
const conexao  = new Squelize(dbConfig);

//INICIALIZANDO OS MODELS 
Aluno.init(conexao);

Post.init(conexao);

Comentario.init(conexao);

// INICIALIZANDO AS ASSOCIAÇÕES CRIADAS
Aluno.associete(conexao.models);

Post.associete(conexao.models);

Comentario.associate(conexao.models);

// exportando a conexçao
module.exports = conexao; 