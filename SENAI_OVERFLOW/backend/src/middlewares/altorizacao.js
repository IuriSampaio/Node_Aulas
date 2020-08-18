const jwt = require("jsonwebtoken");
const config = require("../../config/auth.json")

module.exports = ( req,res,next ) => {
	const auto = req.headers.authorization;

	if ( !auto )
		res.send(401).send({erro:"token não informado!!!!!!"});
	
/*  Bearer       728ehqudhd8723dnu8hh327d28hd187dgb2e8o */ //---> assim sera entegregue o beader token
/*  bearer            token   */ 
	const [Bearer, token] = auto.split(" ");

	if( !token )
		res.status(404).send({erro:"TOKEN MAL FEITO HACKER DE MERDA!!!!!!"}) 
	try{
		const retorno = jwt.verify(token, config.secret)

		req.alunoId = retorno.alunoId

		return next();	
	}catch(err){
		res.status(401).send({erro:"HACKER DE MERDAAAAAAAAAAAAAAAAAAA"})

	}

	
}	
