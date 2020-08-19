import styled from 'styled-components';

export const Conteiner = styled.div`
    background-color: #e6b3e6;
    width:100vw;
    height:100vh;
    display:flex;
    flex:1;
    margin:auto;
    align-items:center;
    justify-content:center;
`;
export const ConteinerLogin = styled.div`
    width: 70%;
    max-width: 860px;
    height: auto;
    box-shadow:20px 2px 130px rgba(0,20,20,0.81);
    background-image: linear-gradient(to left, #732673 , #e6b3e6);
    border-radius:10px;
    padding:20px;
    margin:auto;
    position:absolute;
    z-index:1;
    
`;
export const LogoSenai = styled.div`
    font-size: 4rem ;
    font-family: 'Alfa Slab One', cursive;
    font-wight: 300;
    text-shadow:2px 2px 12px #e6b3e6ea;
    color: #732673 ;
    width:100%;
    text-align:center;
    padding-bottom:20px;
`;
export const ConteinerFoto = styled.div`
    width:75%;
    min-width:100px;
    max-height:80%;
    position:absolute;
    z-index:0;
    overflow:hidden;
    
    > img {
        width:100%;
        height:100%;
    }
`;

export const Form = styled.form`
    width:100%;
    height:80%;
    


`;