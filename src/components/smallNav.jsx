import React,{useState} from 'react'
import {NavBar,NavButton,NavIcon,HamburgerNav} from "./style.js"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';

/* THAT COMPONENT WILL BE RETURNED TO HEADER ON FALSE VALUE */

function SmallNav(){

    const [Show,setShow]=useState("80")
    const [MenuIco,setMenuIco]=useState(<MenuIcon/>)
    return(
        <NavBar>
            <HamburgerNav margin={Show}>
                <NavButton 
                    href="#">
                        Home
                </NavButton>

                <NavButton 
                    href="#">
                        Sobre
                </NavButton>

                <NavButton 
                    href="#">
                        Portfólio
                </NavButton>

                <NavButton 
                    href="#">
                        Contato
                </NavButton>

            </HamburgerNav>

                <NavButton onClick={()=>{
                    if (Show=="80"){
                        setShow("-200")
                        setMenuIco(<MenuOpenIcon/>)
                    }else{
                        setShow("80")
                        setMenuIco(<MenuIco/>)
                    }
                }}>
                    <MenuIcon></MenuIcon>
                </NavButton>

        </NavBar>
    )
}

export default SmallNav