import React from 'react';

const Login = (  ) => {
    const [ email , setEmail ] = React.useState("");
    const [ senha , setSenha ] = React.useState("");

    const handlerEmail = ( e ) => {
      setEmail(e.target.value);
    };
  
    const handlerSenha = ( e ) => {
      setSenha(e.target.value);
    };
  
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
          body:JSON.stringify({ 
                      email,
                      senha 
                    })
        })
      
      const json= await res.json()
      console.log(json)
    };

    const cadastrar = (  ) => { };
  
    return (
      <>
        <input type="email" value={email} onChange={handlerEmail} className="inputLogin" placeholder="digite o seu email..." />
        <input type="password" placeholder="digite sua senha " value={senha} className="inputLogin" onChange={handlerSenha} />
        <div className="conteinerBtn">
            <button  onClick={ entrar }>Entre</button>
            <button  onClick={ cadastrar }>Cadastre-se</button>
        </div>
      </>
    );
}

export default Login;