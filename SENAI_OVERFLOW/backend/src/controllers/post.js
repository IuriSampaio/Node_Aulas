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
		
		const created_aluno_id = req.alunoId;

		const { title, code , photo , text } = req.body;

		const update = Post.update({
							title,
							code,
							photo,
							text,
							updatedAt:null,
						}, {
							where: {
							deletedAt: {
								[Op.ne]: null
							},
							created_aluno_id,
							id: id
							}
						});
		if( update ){
			res.send('foi')
		}
	},
// DELETE 
	async delete ( req , res ) {
//localhost:3001/post/:id
		const aluno_id = req.alunoId
		const { id } = req.params		
		if ( id > 0 && aluno_id > 0){
			const postagem = await Post.findByPk(id);
			if( postagem ){
				const deletou = await Post.destroy({
					where: {
						id,
						created_aluno_id : aluno_id			
					}
					  });
				   if ( deletou ) {
					   res.status(201).send({post_deletado:id});
				   } else {
					   res.status(404).send({post:"não deu"})
				   }
			} else {
				res.status(404).send({post:"não existe"})
			}
			
		}
		res.status(501).send({erro:"erro"});
		
	},

}