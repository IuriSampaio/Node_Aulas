import React from 'react';
import { api } from '../../services/api';
import { signIn } from '../../services/security'  
import { Conteiner, ConteinerLogin, LogoSenai, ConteinerFoto } from './style';
import { Form } from './style';
import { useHistory } from "react-router-dom";
import img from '../../assets/img.jpg'; 
import Alert from '../../components/Alert/index';

const LoginForm = ( props ) => {
    const [ aluno , setAluno ] = React.useState({
      email:"",
      senha:""
    });

    let history = useHistory();

   const handlerInput = ( e ) => {
      setAluno( { ...aluno , [e.target.id] : e.target.value   } );
      console.log(aluno)
    };

   const entrar = async( e ) => {
      e.preventDefault();
      try{
      const res = await api.post("/sessao",aluno)
        
        if ( res.status === 201 ){
          signIn(res.data);
          return history.push("/home");
        }
      } catch(err){
         console.log(err);
        if( err.response ){
            return (<Alert text={err.response.data.erro} /> )           
        }
        return (<Alert text="Você esqueceu de colocar o back-end pra rodar" /> );
      }
    };

    return (
      <Form onSubmit={entrar}>
        <input type="email" value={aluno.email} onChange={handlerInput} className="inputLogin" placeholder="digite o seu email..."  id="email"/>
        <input type="password" placeholder="digite sua senha " value={aluno.senha} className="inputLogin" onChange={handlerInput} id="senha" />
        <div className="conteinerBtn">
            <button type="submit" >Entre</button>
            <button type="button" onClick={()=>{
               props.mostrarForm("registrar");
            }} >Cadastre-se</button>
        </div>
      </Form>
    );
}


const CadastroForm = ( props ) => {
     const [ alunoR , setAlunoR ] = React.useState({
       ra:"",
       nome:"",
       email:"",
       senha:""
     });

    const handlerInput = ( e ) => {
      setAlunoR( { ...alunoR , [e.target.id] : e.target.value   } );
      console.log(alunoR)
    };

    const cadastrar = async( e ) => {
      e.preventDefault();
      try{
        const res = await api.post("/alunos",alunoR)
        
        if ( res.status === 201 ){
          console.log("logado com sucesso!!");
        }
      } catch(err){
         console.log(err);
         if( err.response ){
           return (<Alert text={err.response.data.erro} /> )  
         }
         return (<Alert text="Você esqueceu de colocar o back-end pra rodar" /> );
      }  

      
    };

     return (
      <Form onSubmit={cadastrar}>
        <input type="ra" value={alunoR.ra} onChange={handlerInput} className="inputLogin" placeholder="digite o seu ra..."  id="ra"/>
        <input type="nome" placeholder="digite seu nome " value={alunoR.nome} className="inputLogin" onChange={handlerInput} id="nome" />
        
        <input type="email" value={alunoR.email} onChange={handlerInput} className="inputLogin" placeholder="digite o seu email..."  id="email"/>
        <input type="password" placeholder="digite sua senha " value={alunoR.senha} className="inputLogin" onChange={handlerInput} id="senha" />
        <div className="conteinerBtn">
            <button type="submit" >Cadastrar</button>
            <button type="button" onClick={()=>{
               props.mostrarForm("login");
            }} >Ja tenho cadastro</button>
        </div>
      </Form>
    );
}

export const Login = ( props ) => {
   const [ mostrarForm , setMostrarForm ] = React.useState("login")
  return (
    <>
        <ConteinerFoto>
          <img src={img} alt="foto do senai" />
        </ConteinerFoto>    
        <Conteiner>
          <ConteinerLogin>  
            <LogoSenai>SENAI OVERFLOW</LogoSenai>
              <p>Tire a suas duvidas..</p>
              {mostrarForm === "login" ? <LoginForm mostrarForm={setMostrarForm} /> :  <CadastroForm mostrarForm={setMostrarForm} />}
          </ConteinerLogin>
        </Conteiner>
    </>
    );
};


