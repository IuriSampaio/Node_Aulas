import React from 'react';
import './style.css';
import { api } from '../../services/api';
import { FiGithub, FiLogOut } from 'react-icons/fi';
import { signOut, getAluno } from '../../services/security';
import { useHistory } from "react-router-dom";
import PopUp from '../../components/PopUp';
import { Alert } from '../../components/Alert/index';

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
							<div className="header-post">
								<img alt="foto perfil" src="https://avatars3.githubusercontent.com/u/60737410?s=460&v=4" />
								<strong>{post.Aluno.nome}</strong>
								<p>em {post.createdAt}</p>
								<span>{ post.code && (<FiGithub />)}</span>
							</div>
							<hr />
							<section className="body-post">
								<h2>{post.title}</h2>
							
								<strong>{post.text}</strong>

								<img src={post.photo} alt="foto pergunta"   />
							</section>
							<section className="footer-post">
								<h5 onClick={carrgearComentarios}>Comentarios:</h5>
								{mostrarComentarios  && (
								<section>
								{Comentarios.length === 0 && (<p className="beFirst">Seja o primeiro a comentar</p>)}
								{Comentarios.map((c)=>(
									<div key={c.id} className="conteinerComentarios">
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
								
							</section>
						</div>
			
			);
}

const NewPost = ({ setTheShowNewPost }) => {
	const [ NewPost , setNewPost ]= React.useState({
		titulo: "" ,
		text  : "" ,
		code  : ""
	});
	
	const fechar = ( ) => {
		const {titulo, text, code} = NewPost;

		if((titulo || text || code) && window.confirm("vai abandonar mesmo cuzão?")){
			setTheShowNewPost(false)
		}else if(!(titulo || text || code)){
			setTheShowNewPost(false)
		}else{
			setTheShowNewPost(true)
		}
	}
	const handlerInput = ( e ) => {
		setNewPost(
			{
				...NewPost,
				[e.target.id]  :  e.target.value 
			});
	}
	return (
		<PopUp>
			<div className="conteinerInputs" >
				<i onClick={
					fechar
				}>&times;</i>
				<h1>Publique sua duvida</h1>
				<p>Os campos com <span>*</span> são obrigatórios</p>

				<label htmlFor="titulo" >Titulo<span>*</span></label>
				<input type="text" id="titulo" onChange={handlerInput} placeholder="Resuma sua duvida em poucas palavras..." />

				<label htmlFor="text">Duvida<span>*</span></label>
				<textarea placeholder="Digite o ente da sua duvida" id="text"  onChange={handlerInput}></textarea>
				
				<label htmlFor="code" >Gist do github</label>
				<input type="text" id="code"  onChange={handlerInput} placeholder="ex: https://gist.github.com/ClementPinard/e7353dee56faf3f4c62f0753a2703568.js" />

				<label htmlFor="foto">Imagem</label>
				<input type="file" id="foto" />
				<img alt="preview imge" />

				<button>Enviar duvida</button>
			</div>
		</PopUp>
			);
};

export function Home(){
	const alunoLogado = getAluno();
	const history = useHistory();
	const [ setMsg ] = React.useState("");
	const [ postagens , setPostagens ] = React.useState([]);
	const [ showNewPost , setTheShowNewPost ] = React.useState(false);

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
				return setMsg(err.response.data.erro)
	
				}
				return setMsg("esqueceu de acender o back")
			}
			
		}
		carregarPostagens();
	},[setMsg]);
	return (

		<div className="conteiner">
		{showNewPost  &&  <NewPost setTheShowNewPost={setTheShowNewPost}/> }
		<Alert />

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
					<label>Editar foto</label>
					<strong>Nome:</strong>
					<p>{alunoLogado.nome}</p>
					<strong>RA:</strong>
					<p>{alunoLogado.ra}</p>
				</section>

				<section className="feed">
					{postagens.map( ( post ) => ( <CardPost key={post.id} post={post}/> ) ) }
					
				</section>

				<section className="actions">
					<button onClick={()=>{
						setTheShowNewPost(true)
					}}>Poste sua duvida!!</button>
				</section>
			
			</div>
		</div>

		);
}
