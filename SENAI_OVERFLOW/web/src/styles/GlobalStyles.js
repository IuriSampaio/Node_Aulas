import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap');
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
    background-color:#910f3a2e;
    border: solid white 2px;
}
.inputLogin{
    background-image:linear-gradient(to left, #732673 , #e6b3e6);
    margin-bottom:45px;
    :valid {
        transition:1s;
        background-image:linear-gradient(to right, #732673 , #e6b3e6);
    }
    :hover {
        transition:1s;
        background-image:linear-gradient(to left, #732673 , #e6b3e6);
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
        background-color:#910f3aff;
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