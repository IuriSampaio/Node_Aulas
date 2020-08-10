const { Model , DataTypes } = require("sequelize");

class Post extends Model {
	
	static init( sequelize ){
		super.init({
			title   : DataTypes.STRING,
			code    : DataTypes.STRING,
			photo   : DataTypes.STRING,
			text    : DataTypes.TEXT,
		},{
			sequelize,
		})
	}
	static associete( MODELS ){
		// um post foi feito por um aluno
		this.belongsTo(MODELS.Aluno,{ foreignKey:"created_aluno_id" })
	}
}

module.exports = Post;