import React from 'react';
import './style.css';
import { api } from '../../services/api';
import { FiGithub, FiLogOut } from 'react-icons/fi';
import { signOut, getAluno } from '../../services/security';
import { useHistory } from "react-router-dom";


function CardPost({post}){
	const [mostrarComentarios, setMostrarComentarios] = React.useState(false);

	const [ Comentarios, setComentarios ] = React.useState([]);

	const carrgearComentarios = async() => {
		try{
			if(!mostrarComentarios){
				const res = await api.get(`/home/${post.id}/comment`)
				setComentarios(res.data)
			}
			setMostrarComentarios(!mostrarComentarios)
		}catch(err){
			console.log(err)
		}
	}
	return(
					<div className="card-post">
						<header>
							<img alt="foto perfil" src="https://avatars3.githubusercontent.com/u/60737410?s=460&v=4" />
							<strong>{post.Aluno.nome}</strong>
							<p>em {post.createdAt}</p>
							<span>{ post.code && (<FiGithub />)}</span>
						</header>
						<hr />
						<body>
							<h2>{post.title}</h2>
						
							<strong>{post.text}</strong>

							<img src={post.photo} alt="foto pergunta"   />
						</body>
						<footer>
							<h5 onClick={carrgearComentarios}>Comentarios:</h5>
							{mostrarComentarios  && (
							<section>
							{Comentarios.length === 0 && (<p className="beFirst">Seja o primeiro a comentar</p>)}
							{Comentarios.map((c)=>(
								<div className="conteinerComentarios">
									<header>
										<img alt="foto perfil" src="https://avatars3.githubusercontent.com/u/60737410?s=460&v=4" />
										<strong>{c.Aluno.nome}</strong>
										<p>em {c.created_at}</p>
									</header>
									<hr />
									<p>{c.text}</p>
								</div>
							))}
							
						
							</section>
								) }
							
						</footer>
					</div>
		
		);
}

export function Home(){
	const alunoLogado = getAluno();
	const history = useHistory();

	const [postagens, setPostagens] = React.useState([]);
	//Usando esse Hook, você diz ao React que o componente precisa fazer algo apenas
	// depois da renderização. O React ira se lembrar da função que você passou 
	// (nos referiremos a ele como nosso “efeito”), e chamá-la depois que realizar as
	// atualizações do DOM. Nesse efeito, mudamos o título do documento, mas podemos
	// também realizar busca de dados ou chamar alguma API imperativa.
	React.useEffect(()=>{
		// a função useEffect não pode ser asincrona, 
		// portanto deve-se colocar outra função
		// dentro dela para o caso de haver uma requisição dentro da mesma
		const carregarPostagens = async() =>{
			try{
				const retorno = await api.get('/home');	
				setPostagens(retorno.data)
			} catch ( err ) {
				if(err.response){
				//	return setMsg(err.response.data.erro)
				console.error(err);
				}
				//setMsg("esqueceu de acender o back")
			}
			
		}
		carregarPostagens();
	},[]);
	return (

		<div className="conteiner">


			<div className="header">

				<div><p>SENAI OVERFLOW</p></div>
				<div className="conteinerInpSeach"><input type="search" placeholder="Digite sua duvida aqui !!" /></div>
				<div className="conteinerBtnSair"> <button className="btnSair" onClick={()=>{
																					 signOut();
																					 history.replace("/")
																					}
																				}><span>SAIR</span>  <FiLogOut /> </button> </div>
			</div>

			<div className="content">

				<section className="profile">

					<img alt="foto perfil" src="https://avatars3.githubusercontent.com/u/60737410?s=460&v=4" />
					<a href="">Editar foto</a>
					<strong>Nome:</strong>
					<p>{alunoLogado.nome}</p>
					<strong>RA:</strong>
					<p>{alunoLogado.ra}</p>
				</section>

				<section className="feed">
					{postagens.map( ( post ) => ( <CardPost post={post}/> ) ) }
					
				</section>

				<section className="nada"></section>
			
			</div>
		</div>

		);
}
