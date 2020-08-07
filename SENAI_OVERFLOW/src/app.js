//importando o express
const express = require('express')

// importando arquivo de rotas 
const rotas = require('./routes')

// // importando a conexão com o banco de dados
 require('./database')

// instanciando o express
const app = express()

// diz para o servidor que ele pode receber respostas do tipo json
app.use(express.json())

// dizendo para o servido usar o arquivo de rotas
app.use(rotas)

// exportando/retornando a variavel app
module.exports = app





///////////////////////// BRINCADEIRAS COM .get(), .post(), .use(), .send() //////////////////////////////////

// feito antes de separar os arquivos para deixar clean code

// DEIXANDO O DIRETORIO INICIAL / COMO HOME DO SITE
// app.get("/", (req, res) => {
//     res.send("Home")
// })


// app.post("/alunos",(req , res)=>{
 
// })



// // O DIRETORIO /pessoa VAI MOSTRAR A PESSOA
// app.get("/pessoa", (req, res) => {
//         res.send(
//             `<h1>PESSOAS</h1>
//             <div style='width:30%;margin:30px; height:120px; color:orangered; border:solid 2px orangered; border-radius:30px; font-family:monospace; box-shadow:2px 5px 5px 2px orangered';>
//                 <h2 style="margin-left:10px;">   Nome : ${pessoas.nome}            </h2>
//                 <h3 style="margin-left:10px;">   Sobrenome : ${pessoas.sobrenome}  </h3>
//                 <h3 style="margin-left:10px;">   Idade : ${pessoas.idade}          </h3>
//             </div>
//             `
//             )
// })

// app.get("/FODASE", (req, res) => {
//     res.send("<h1 style='width:100%;text-align:center;height:90px;background-color:orangered;color:white;' >Essa pagina é dedidada a vontade de morrer que eu tenho<br> obrigado por descobrir</h1>")
// })

// // SE NENHUM DOS DIRETORIOS MOSTRANDOS FOR OQUE FOI CHAMADO
// // AO INVEZ DE MOSTRAR UM ERRO VAI MMOSTRAR OQE NOIS QUISER
// app.use((req, res) => {
//     res.status(404).send("<h1>DESCULPE NÃO ENCONTRADO</h1>")
//     res.status(500).send("<h1>ESTAMOS COM PROBLEMAS, DESCULPE (ERRO NO SERVIDOR)</h1>")
// })

