const { Model , DataTypes } = require("sequelize");

class Aluno extends Model {

	static init( sequelize ){
		super.init({
			ra   : DataTypes.STRING,
			nome : DataTypes.STRING,
			email: DataTypes.STRING,
			senha: DataTypes.STRING,
		},{
			sequelize,
		})
	}
}
module.exports = Aluno; 