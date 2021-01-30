import styled from "styled-components"
/* HEADER styles file */

export const HeaderS=styled.div`
    display:flex;
    justify-content:center;
    background-color:rgba(0,0,0,.2);
    width:100%;
    height:80px;
    margin:0px;
    padding:0px;
    transition:border 3s linear;

`;

export const Logo=styled.div`
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
    min-width:230px;
`;

export const NavBarS=styled.span`
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
    margin-right:5%;
    color:white;
    text-decoration:none;
    cursor:pointer;
    transition:all .5s;
    font-size:20px;
    &:hover{
        color:gray;
    }
    @media (max-width:450px){
        &:hover{
            color:white;
        }
    }
`;

export const ColumnNav=styled.div`
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

export const InlineNav=styled.div`
    display:flex;
    justify-content:flex-end;
    width:100%;
    @media (max-width:1000px){
        display:none;
    }
`;

export const MenuHamburger=styled.div`
    margin-left:20px;
    margin-right:20px;
    @media (min-width:1000px){
        display:none;
    }
`;

export const MidiaNav=styled.span`
    display:flex;
    justify-content:space-between;
    width:100px;
    margin-left:1%;
    @media (max-width:600px){
        display:none;
    }
`;

export const SideBarS=styled.div`
    position:fixed;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    top:40%;
    left:3px;
    width:35px;
    background-color:transparent;
    transition:all 1.5s;
    @media (max-width:600px){
        transform: translateX(-100px);
    }
`;