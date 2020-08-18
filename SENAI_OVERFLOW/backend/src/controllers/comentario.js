const Comentarios = require("../model/Comentarios"); 
const postagem = require("../model/Post");


module.exports = {

	async index ( req , res ) {
		const { postId } = req.params;
// ja traria todos os comentarios com todos os ids e chaves estrangeiras
		let comentarios = await postagem.findByPk(postId);//,{
//			include:Comentarios, // da o nome de comentarios ao array de postagens
//			attributes :[]
//		});

		if(!comentarios){
			return res.status(404).send({erro:"not found the post "})
		}

		comentarios = await comentarios.getComentarios(
		{
			include: 
			{
				association :  "Aluno" ,
				attributes	:   [ "id" , "nome" ] ,
			} ,
			attributes	:  ["id","text"], 
			order 		:  [["created_at","DESC"]],
		}
		);

		res.send(comentarios);
		
	},

	async store ( req , res ) {
		const  aluno_id  = req.alunoId;
		const { postId } = req.params;

		const { text } = req.body;
		
		const post = await postagem.findByPk(postId);

		if(!post){
			return res.status(404).send({erro:"not found the post "})
		}
		
		

		let comentario = await post.createComentario(
			{
				text,
 				aluno_id
			});
		
		// formatando a saida para snake_case
		comentario = comentario.dataValues;
		comentario.post_id = comentario.PostId
		delete comentario.PostId;
		delete comentario.AlunoId;

		return res.send(comentario);
	}


};