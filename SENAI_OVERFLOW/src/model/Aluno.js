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
	static associete( MODELS ){
		// um aluno pode fazer varios posts
		this.hasMany(MODELS.Post,{ foreignKey:"created_aluno_id" })
	}
}
module.exports = Aluno; 