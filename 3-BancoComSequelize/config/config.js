// objeto que será retonado para a conexão com o banco
module.exports = {
	dialect :  "mysql",
	host    :  "localhost",
	username:  "root",
	password:  "bcd127",
	database:  "senai_overflow",
	define  : {
		timestamp  : true,
		underscored: true,
	},
}

// timestamp   -->  Define a data de ciração e as atualizações no banco 
// underscored -->  Define os campos no banco como snake_case