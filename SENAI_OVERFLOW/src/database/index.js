// importando sequelize
const Squelize = require('sequelize');
// pegando o obj de configuração exportado pelo arquivo 
const dbConfig = require('../config/database.js');

// criando a conexão com banco pelo sequelize passando o objeto de conexão criado 
const conexao  = new Squelize(dbConfig);
// exportando a conexçao
module.exports(conexao); 