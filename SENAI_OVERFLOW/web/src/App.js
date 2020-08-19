import React from 'react';
import Login from './pages/login/index.js';
import { Conteiner, ConteinerLogin, LogoSenai, ConteinerFoto } from './pages/login/style';
import { GlobalStyle } from './styles/GlobalStyles.js'
import img from './assets/img.jpg' 

function App() {
  return (
       
      
      <Conteiner>
      <GlobalStyle />
        <ConteinerFoto>
          <img src={img} alt="foto do senai" />
        </ConteinerFoto>    
        <Conteiner>
          <ConteinerLogin>
            <LogoSenai>SENAI OVERFLOW</LogoSenai>
              <p>Tire a suas duvidas..</p>
            <Login />
          </ConteinerLogin>
        </Conteiner>
        
        
      </Conteiner>
  );
}

export default App;

/*
  // EXEMPLOS DE CRIAÇÃO E IMPLEMENTAÇÃO DE COMPONENTES COM REACT
  const HelloWord = ( ) => {
    return <div>Hello word, tem que escrever o nome do componente com letra maiuscula</div>
  }
  // passando propriedade HTML com o texto do componente
  const BemVindo = ( props ) => {
      return (
       <div>{props.text}, {props.user}</div>
        );
  }
  // implementando os componentes criados no compponente app que sera renderizado na tela 
  const App = ( ) => {
      <div>    
          <HelloWord />
          
          <BemVindo text="BEM VINDO AO REACT" user="iuri" />
      </div>
   }
    */
    