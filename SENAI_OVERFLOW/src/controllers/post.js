const Post = require("../model/Post");
const Aluno = require("../model/Aluno");

module.exports = {

// SELECT  
	async index ( req , res ) {

		const post = await Post.findAll({
			include:{
				association:"Aluno",
				attributes:["id","nome","ra"],
			},
			order:[["created_at","DESC"]],
		});
		if (! post ){	
			res.send({"erro": "404 NOT FOUND"});
		}
		res.send(post);	
		
	},
// SELECT WHERE ID = ?
	async indexById ( req , res ) {
		const id = req.params.id;
		const post = await Post.findByPk(id,{raw:true});
        if(!post){
            res.status(404).send({"erro":"404 NOT FOUND"})
        }
        res.send(post)
	},
// INSERT
	async store ( req, res ) {

		const created_aluno_id = req.alunoId;

		const { title, code , photo , text } = req.body;
		try{
		const aluno = await Aluno.findByPk(created_aluno_id);

		if ( !aluno ) {
			res.send({erro:"ALUNO NÂO ENCONTRADO"})
		}

		const post = await Post.create({title, code , photo , text , created_aluno_id });
		res.send(post);
		}catch ( err ) {
			return res.send({erro:"não foi possivel adicionar a postagem =( "+err});
		}
		
	},
// UPDATE
	async update ( req , res ) {

	},
// DELETE 
	async delete ( req , res ) {

	},

}