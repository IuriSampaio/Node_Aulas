import React from 'react';
import Routes from './routes';
import { Conteiner } from './pages/login/style';
import { GlobalStyle } from './styles/GlobalStyles.js'

function App() {

  return (      
      <Conteiner>
          <GlobalStyle />   
           <Routes />
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
    