const express = require('express')
const { req } = require('http')
const { res } = require('express')
// INSTANCIANDO O EXPRESS PRA PODER USA-LO
const app = express()

const pessoas = {
        nome: 'Iuri',
        sobrenome: 'Sampaio',
        idade: '18'
    }

// DEIXANDO O DIRETORIO INICIAL / COMO HOME DO SITE
app.get("/", (req, res) => {
    res.send("<h1>Home</h1>")
});
// O DIRETORIO /pessoa VAI MOSTRAR A PESSOA
app.get("/pessoa", (req, res) => {
        res.send(
            `<h1>PESSOAS</h1>
            <div style='width:30%;margin:30px; height:120px; color:orangered; border:solid 2px orangered; border-radius:30px; font-family:monospace; box-shadow:2px 5px 5px 2px orangered';>
                <h2 style="margin-left:10px;">   Nome : ${pessoas.nome}            </h2>
                <h3 style="margin-left:10px;">   Sobrenome : ${pessoas.sobrenome}  </h3>
                <h3 style="margin-left:10px;">   Idade : ${pessoas.idade}          </h3>
            </div>
            `
            )
})

app.get("/algua", (req, res) => {
    res.send("<h1 style='width:100%;text-align:center;height:90px;background-color:orangered;color:white;' >Essa pagina é dedidada a vontade de morrer que eu tenho<br> obrigado por descobrir</h1>")
})

// SE NENHUM DOS DIRETORIOS MOSTRANDOS FOR OQUE FOI CHAMADO
// AO INVEZ DE MOSTRAR UM ERRO VAI MMOSTRAR OQE NOIS QUISER
app.use((req, res) => {
    res.status(404).send("<h1>DESCULPE NÃO ENCONTRADO</h1>")
    res.status(500).send("<h1>ESTAMOS COM PROBLEMAS, DESCULPE (ERRO NO SERVIDOR)</h1>")
})
// COLOCANDO P RODAR NA PORTA 3001
app.listen(3001, ( ) => {
    console.log('rodando na porta 3001')
})
