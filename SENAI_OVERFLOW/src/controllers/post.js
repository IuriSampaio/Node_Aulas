const Post = require("../model/Post");


module.exports = {

// SELECT  
	async index ( req , res ) {
		const post = await Post.findAll();
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
		const { code , photo , text , id_aluno } = req.body;
		const post = await Post.create({ code , photo , text , id_aluno });
		res.send(post);
	},
// UPDATE
	async update ( req , res ) {

	},
// DELETE 
	async delete ( req , res ) {

	},

}