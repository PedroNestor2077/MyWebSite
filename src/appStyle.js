import styled from "styled-components"
import bg from "./background.jpg"
/*APP Root styles*/

export const AppS=styled.div`
    text-align: center;
    height:100%;
    width:100%;
    display:flex;
    margin:0px;
    padding:0px;
    min-width:320px;
    min-height:580px;
    transition:scroll 2s;
`;

export const Background=styled.div`
    position:fixed;
    width:100%;
    height:100%;
    margin:0px;
    padding:0px;
    min-width:320px;
`;

export const ImgBackground=styled.div`
    width:100%;
    height:100vh;
    margin:0px;
    padding:0px;
    background-image:url(${bg});
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
`;

export const Body = styled.div`
    padding-top:20px;
    position:absolute;
    background-color:rgba(0,0,0,.6);
    height:100%;
    min-height:500px;
    width:100%;
    min-width:320px;  
`;
