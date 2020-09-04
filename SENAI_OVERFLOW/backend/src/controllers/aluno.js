const Aluno = require("../model/Aluno");
const {Op}=require("sequelize");
const cripto = require("bcryptjs");
const jwt = require("jsonwebtoken");
//estas seram as açoes controladas pelo banco 

// objeto contendo as açoes possiveis no banco para a contrução da api
module.exports = {
// SELECT
    // index(){

    // },
//retorna uma lista com todos os alunos 
    async listar(req,res){
        // comando executasdo : SELECT * FROM alunos;
        const alunos = await Aluno.findAll();

        res.status(201).send(alunos)
    },
// Buscar no banco pelo id 
    async buscarPorId(req,res){
        const id = req.params.id;
        // raw ---> traz o retorno da forma escrita(obj), e não só o model
        // SELECT * FROM alunos WHERE id = ?
        const aluno = await Aluno.findByPk(id,{raw:true});
        // se não foi retornado nada pelo comando 
        if(!aluno){
            res.status(404).send({"erro":"404 NOT FOUND"})
        }

        // o raw nois possiblita extrair e manipular os dados doque agr é o obj aluno  
        delete aluno.senha;
        // mandando o obj aluno
        res.status(201).send(aluno)
    },

// INSERT
    async store( req , res ){
        // o json enviado pela request será inserido no banco
        const { ra , nome , email , senha }  = req.body
        // SELECT * FROM alunos WHERE ra = ? or email = ?
        let aluno = await Aluno.findOne({ where: {                                   
                                           [Op.or]:[
                                           {ra:ra},
                                           {email:email}
                                           ]}
                                       });
        // se alguma coisa for retornada do comando executado esse aluno ja foi cadastrado
        if (aluno){
            return res.status(400).send({"erro": "Aluno já cadastrado"})
        }

        const senhaCripto = await cripto.hash(senha,10)

        // se não, ele insere o aluno no banco 
        //INSERT INTO alunos VALUES (ra,nome,email,senhaw)
        aluno = await Aluno.create({ ra , nome , email , senha:senhaCripto });

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
        //res.status(201).send(aluno)



    },
// UPDATE
    async update( req , res ){

    },
// DELETE
    async delete( req , res ){

    }

}