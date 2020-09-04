import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root{
    --cor-fundo     : #2f2f2f;
    --cor-fundo-post: #232323;
    --degrade-ini   : #0066ff;
    --degrade-fim   : #401020f0;
    --text-in-input : #abcdef;
    --text-in-background: lightgreen;
    --strong-hover  : #910f3aff;
}
*{
    margin:0;
    padding:0;
}
.inputLogin, button{
    border-radius:10px;
    width:80% ;
    font-size:1.3rem;
    height:20px;
    padding:20px;
    margin-top:20px;
    display:flex;
    justify-content:space-around;
    margin-left:auto;
    margin-right:auto;
    background-color:var(--degrade-ini);
    border: solid white 2px;
}
.inputLogin{
    background-image:linear-gradient(to left, var(--degrade-ini) , var(--cor-fundo) );
    margin-bottom:45px;
    :valid {
        transition:1s;
        background-image:linear-gradient(to right, var(--degrade-ini) , var(--cor-fundo) );
    }
    :hover {
        transition:1s;
        background-image:linear-gradient(to left, var(--degrade-ini) , var(--cor-fundo) );
    }
}
button{
    width:calc( (100% / 3 ) - 15px );
    max-width:300px;
    height:55px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:1.4rem;
    padding-bottom:20px;
    :hover{
        background-color:var(--strong-hover);
        cursor:pointer;
        transition:1s;
    } 
}
.conteinerBtn{
    display:flex;
    justify-content:space-between;
}
p{
    width:100%;
    text-align:center;
    font-size:1.2rem;
}
`;