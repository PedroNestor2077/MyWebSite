import React,{useState} from 'react'
import {NavBarS,NavButton,InlineNav,MenuHamburger, ColumnNav,MidiaNav} from "./headerStyle.js"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';

import {TiSocialLinkedin,TiSocialInstagram} from "react-icons/ti"
import { AiFillGithub,AiOutlineWhatsApp} from "react-icons/ai"
import { MdEmail } from "react-icons/md"
import {RiMenuLine,RiMenuUnfoldLine} from "react-icons/ri"
/* THAT COMPONENT WILL BE RETURNED TO HEADER ON TRUE VALUE */

function NavBar(){
    const [Show,setShow]=useState("-200")
    const [MenuIco,setMenuIco]=useState(<RiMenuLine size="35px"/>)
    return(
        <NavBarS>
            <InlineNav max="600">
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
            </InlineNav>
            <MidiaNav>
                <NavButton 
                    href="https://www.linkedin.com/in/pedro-nestor-a67241200/">
                    <TiSocialLinkedin size="35px"/>
                </NavButton>

                <NavButton
                    href="https://github.com/PedroNestor2077">
                    <AiFillGithub size="35px"/>
                </NavButton>
            </MidiaNav>
            <MenuHamburger min="100">
                <ColumnNav margin={Show}>
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
                </ColumnNav>
                <NavButton onClick={()=>{
                    {/* that function make menu visible or not */}
                    var ico=""
                    if (Show=="80"){
                        setShow("-200")
                        ico=(<RiMenuLine size="35px"/>)
                    }else{
                        setShow("80")
                        ico=(<RiMenuUnfoldLine size="35px"/>)
                    }
                    setMenuIco(ico)
                }}>
                    {MenuIco}
                </NavButton>

            </MenuHamburger>
        </NavBarS>
    )
}
export default NavBar