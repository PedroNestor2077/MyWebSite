import styled from "styled-components"
import logo from "../background.jpg"
export const AppS=styled.div`
    text-align: center;
    height:auto;
    width:auto;
    display:flex;
    margin:0px;
    padding:0px;

`;
export const Background=styled.div`
    width:100%;
    height:100%;
    margin:0px;
    padding:0px;

`;
export const ImgBackground=styled.div`
    width:100%;
    height:100vh;
    margin:0px;
    padding:0px;
    background-image:url(${logo});
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    `;
export const Body = styled.div`
    position:absolute;
    background-color:rgba(0,0,0,.8);
    height:100%;
    width:100%;
`;
/* ---------------HEADER----------------- */
export const HeaderS=styled.div`
    display:flex;
    justify-content:center;
    background-color:rgba(0,0,0,.2);
    width:100%;
    height:80px;
    margin:0px;
    padding:0px;
    transition:border 3s linear;
    &:hover{
        border-bottom:solid 1px white;
    }
`;
export const Logo=styled.div`
    background-position:center;
    background-color:rgba(0,0,0,.0);
    width:350px;
    height:80px;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    margin:0px;
    padding-top:0px;
`;
export const ImgLogo=styled.img`
    width:100%;
    min-width:300px;
`;
export const NavBar=styled.span`
    display:flex;
    justify-content:flex-end;
    align-items:center;
    width:60%;
    height:100%;
    background-color:transparent;
    margin:0px;
    padding:0px;
`;
export const NavButton=styled.a`
    align-items:center;
    background-color:transparent;
    width:auto;
    margin-right:3%;
    color:white;
    text-decoration:none;
    cursor:pointer;
    transition:all .5s;
    &:hover{
        color:black;
    }
`;
export const HamburgerNav=styled.div`
    display:flex;
    flex-wrap:wrap;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    background-color:rgba(0,0,0,.1);
    position:absolute;
    width:auto;
    height:200px;
    top:${props => `${props.margin}px`};
    right:33px;
    border-radius:10px;
    transition:all .2s;
`;
/* --------------------SIDE BAR----------- */
export const SideBarS=styled.div`
    position:fixed;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    top:40%;
    left:3px;
    width:auto;
    height:200px;
    background-color:transparent;
`;