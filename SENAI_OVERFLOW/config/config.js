// objeto que será retonado para a conexão com o banco
module.exports = {
	dialect :  "mysql",
	host    :  "localhost",
	username:  "root",
	password:  "bcd127",
	database:  "senai_overflow",
	logging :   console.log, // mostra oque o sequelize ta fazendo ao criar as migrations
	define  : {
		timestamp  : true,
		underscored: true,
	},
}

// timestamp   -->  Define a data de ciração e as atualizações no banco 
// underscored -->  Define os campos no banco como snake_case