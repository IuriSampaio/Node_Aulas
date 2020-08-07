const { Model , DataTypes } = require("sequelize");

class Post extends Model {
	
	static init( sequelize ){
		super.init({
			code    : DataTypes.STRING,
			photo   : DataTypes.STRING,
			text    : DataTypes.STRING,
			id_aluno : DataTypes.INTEGER,	
		},{
			sequelize,
		})
	}
}

module.exports = Post;