import React from 'react';


const HelloWord = ( ) => {
  return <div>Hello word, tem que escrever o nome do componente com letra maiuscula</div>
}

// passando propriedade HTML com o texto do componente
const BemVindo = ( props ) => {
  return (
      <div>{props.text}, {props.user}</div>
  );
}

const Login = (  ) => {
  const [ email , setEmail ] = React.useState("");

  const handlerEmail = ( e ) => {
    setEmail(e.target.value);
  }

  const [ senha , setSenha ] = React.useState("");

  const handlerSenha = ( e ) => {
    setSenha(e.target.value);
  }

  const entrar = async(  ) => {
    // REALIZANDO LOGIN ULTILIZANDO A API CONTRUIDA COM NODE NO BACKEND
    const url = "http://localhost:3001/sessao";

    const res = await fetch(url, 
        // DIZENDO QUE VAI SER MÉTODO POST 
      { method: "POST",
        // FALANDO QUE VAI SER UM JSON
        headers:  { 
                    'Content-Type':'application/json' 
                  },
        // CORPO DA REQUISIÇÕA
        body:     { 
                    email,
                    senha 
                  }
      })
    
    const json= await res.json()
    console.log(json)
  }

  return (
    <>
      <input type="text" value={email} onChange={handlerEmail} placeholder="digite o seu email..." />
      <input type="password" placeholder="digite sua senha " value={senha} onChange={handlerSenha} />
      <button  onClick={ entrar }>Teste</button>
  <h1>{email} {senha}</h1>
    </>
  );
}

function App() {
  return (
    <div>
      <HelloWord />
      <BemVindo text="BEM VINDO AO REACT" user="iuri" />
      <Login />
    </div>
    
  );
}

export default App;
