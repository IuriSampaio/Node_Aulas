const  Aluno = require("../model/Aluno");
const { store } = require("./comentario");
const cripto = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
		async store ( req , res ) {
			const { email , senha } = req.body;
			//SELECT * FROM alunos WHERE email = ? and senha = ?
			const aluno  = await Aluno.findOne({
				where: { email }
			})
			if(  !aluno || !await cripto.compare( senha , aluno.senha ) ){
				return res.status(403).send({"erro":"senha incrorreta"})
			}

			const token = jwt.sign( {alunoId: aluno.id} , "SENAIOVERFLOW" )

			return res.status(201).send(
			{
				aluno: {
					"alunoid":aluno.id,
					"nome":aluno.nome,
					"ra":aluno.ra,
				},
				
				"token":token
			})
		}

}
