const { Model , DataTypes } = require("sequelize");

class Comentario extends Model {
	static init ( sequelize ) {
		super.init(
				{
					text : DataTypes.TEXT,
				},
				{ sequelize, }
			);
	}

	static associate ( models ) {
		this.belongsTo(models.Post);
		this.belongsTo(models.Aluno,{foreignKey:"aluno_id"});
	}
}

module.exports = Comentario;