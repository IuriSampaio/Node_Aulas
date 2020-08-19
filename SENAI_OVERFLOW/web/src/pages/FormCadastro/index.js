import React from 'react';

const Cadastro = (  ) => {

    const cadastrar = async(  ) => {
      // REALIZANDO LOGIN ULTILIZANDO A API CONTRUIDA COM NODE NO BACKEND
      const url = "http://localhost:3001/alunos";
  
      const res = await fetch(url, 
          // DIZENDO QUE VAI SER MÉTODO POST 
        { method: "POST",
          // FALANDO QUE VAI SER UM JSON
          headers:  { 
                      'Content-Type':'application/json' 
                    },
          // CORPO DA REQUISIÇÕA
          body:JSON.stringify({ 
                    nome,  
                    email,
                    ra,
                    senha 
                    })
        })
      
      const json= await res.json()
      console.log(json)
    };

    return (
      <>
        
      </>
    );
}

export default Cadastro;