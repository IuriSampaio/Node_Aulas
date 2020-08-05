//estas seram as açoes controladas pelo banco 

// objeto contendo as açoes possiveis no banco para a contrução da api
module.exports = {
// SELECT
    index(){

    },
// INSERT
    store( req , res ){
        // o json enviado pelo request será um aluno
        const aluno  = req.body

        // apenas para teste, sera trocado pela inserção no banco 
        res.send({ "ok" : aluno.nome })
    },
// UPDATE
    update(){

    },
// DELETE
    delete(){

    }

}