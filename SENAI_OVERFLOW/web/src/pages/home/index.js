import React from 'react';
import './style.css';
export function Home(){
	return (

		<div className="conteiner">


			<div className="header">

				<div><p>SENAI OVERFLOW</p></div>
				<div className="conteinerInpSeach"><input type="search" placeholder="Digite sua duvida aqui !!" /></div>
				<div>3</div>
			</div>

			<div className="content">

				<section className="profile">

					<img alt="foto perfil" src="https://avatars3.githubusercontent.com/u/60737410?s=460&v=4" />
					<a href="#">Editar foto</a>
					<strong>Nome:</strong>
					<p>Ludovico</p>
					<strong>Email:</strong>
					<p>Ludovico@nana.com</p>
					<strong>RA:</strong>
					<p>123456789</p>
				</section>

				<section className="feed">
					<div className="card-post">
						<header>
							<img alt="foto perfil" src="https://avatars3.githubusercontent.com/u/60737410?s=460&v=4" />
							<strong>BIG Jaum</strong>
							<p>em 11/11/2011</p>
							<span>git icon</span>
						</header>
						<hr />
						<body>
							<h2>titulo pergunta</h2>
						
							<strong>descrição texto pergunta</strong>

							<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnews.psu.edu%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fthreshold-992%2Fpublic%2Fprogramming-language-600x400.jpg%3Fitok%3DsMvbIqA0&f=1&nofb=1" alt="foto pergunta"   />
						</body>
						<footer>
							<h5>Comentarios:</h5>
							<div className="conteinerComentarios">
								<header>
									<img alt="foto perfil" src="https://avatars3.githubusercontent.com/u/60737410?s=460&v=4" />
									<strong>BIG Jaum</strong>
									<p>em 11/11/2011 ás 11h</p>
								</header>
								<hr />
								<p>texto do comentario</p>
							</div>
							<div className="conteinerComentarios">
								<header>
									<img alt="foto perfil" src="https://avatars3.githubusercontent.com/u/60737410?s=460&v=4" />
									<strong>BIG Jaum</strong>
									<p>em 11/11/2011 ás 11h</p>
								</header>
								<hr />
								<p>texto do comentario</p>
							</div>
							<div className="conteinerComentarios">
								<header>
									<img alt="foto perfil" src="https://avatars3.githubusercontent.com/u/60737410?s=460&v=4" />
									<strong>BIG Jaum</strong>
									<p>em 11/11/2011 ás 11h</p>
								</header>
								<hr />
								<p>texto do comentario</p>
							</div>
						</footer>
					</div>
				</section>

				<section className="nada"></section>
			
			</div>
		</div>

		);
}
