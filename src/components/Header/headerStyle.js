import styled from "styled-components"

export const HeaderS=styled.div`
    display:flex;
    justify-content:center;
    width:100%;
    height:80px;
    transition:all .2s linear;
    position:fixed;
    z-index:1;
    position:${props=> `${props.position}`};
    top:${props=>`${props.margin}px`};
    background-color:${props=>`${props.background}`};
`;

export const Logo=styled.div`
    background-color:rgba(0,0,0,.0);
    width:350px;
    height:80px;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
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
`;

export const ColumnNav=styled.div`
    display:flex;
    justify-content:flex-start;
    flex-direction:column;
    align-items:center;
    padding-top:80px;
    position:fixed;
    background-color:rgba(0,0,0,.6);
    width:auto;
    height:100%;
    top:${props => `${props.margin}px`};
    right:0px;
    transition:all .2s;  
    z-index:1;
`;

export const InlineNav=styled.div`
    display:flex;
    justify-content:flex-end;
    width:100%;
`;

export const MenuHamburger=styled.div`
    margin-left:20px;
    margin-right:20px;
    #showMenu{
        position:relative;
        border-bottom:none;
        z-index:2;
    }
    a{
        border-bottom:solid white 2px;
        width:200px;
        height:40px;
        margin-right:0px;
        padding-top:8px;
    }
`;

export const MidiaNav=styled.span`
    display:flex;
    justify-content:space-between;
    width:100px;
    margin-left:1%;
`;

export const SideBarS=styled.div`
    position:absolute;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    top:40%;
    left:3px;
    width:35px;
    background-color:transparent;
    transition:all 1.5s;
`;

