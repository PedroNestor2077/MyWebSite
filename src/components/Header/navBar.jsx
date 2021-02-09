import React,{useState} from 'react'
import {NavBarS,NavButton,InlineNav,MenuHamburger, ColumnNav,MidiaNav} from "./headerStyle.js"
import {TiSocialLinkedin} from "react-icons/ti"
import { AiFillGithub,AiOutlineWhatsApp} from "react-icons/ai"
import {RiMenuLine,RiMenuUnfoldLine} from "react-icons/ri"

function NavBar(){
    const [Show,setShow]=useState("-800")
    const [MenuIco,setMenuIco]=useState(<RiMenuLine size="35px"/>)
    return(
        <NavBarS>
            <InlineNav max="600" id="InlineNav">
                    <NavButton 
                        href="#">
                            Home
                    </NavButton>

                    <NavButton 
                        href="#abbout">
                            Sobre
                    </NavButton>

                    <NavButton 
                        href="#Projects">
                            Portfólio
                    </NavButton>

                    <NavButton 
                        href="#contact">
                            Contato
                    </NavButton>
            </InlineNav>
            <MidiaNav id="MidiaNav">
                <NavButton 
                    href="https://www.linkedin.com/in/pedro-nestor-a67241200/" target='_blank'>
                    <TiSocialLinkedin size="35px"/>
                </NavButton>

                <NavButton
                    href="https://github.com/PedroNestor2077" target="_blank">
                    <AiFillGithub size="35px"/>
                </NavButton>
            </MidiaNav>
            <MenuHamburger min="100" id="MenuHamburger">
                <ColumnNav margin={Show} id="ColumnNav">
                    <NavButton 
                        href="#">
                            Home
                    </NavButton>

                    <NavButton 
                        href="#abbout">
                            Sobre
                    </NavButton>

                    <NavButton 
                        href="#Projects">
                            Portfólio
                    </NavButton>

                    <NavButton 
                        href="#contact">
                            Contato
                    </NavButton>
                </ColumnNav>
                <NavButton id="showMenu" onClick={()=>{
                    {/* that function make menu visible or not */}
                    var ico=""
                    if (Show=="0"){
                        setShow("-800")
                        ico=(<RiMenuLine size="35px"/>)
                    }else{
                        setShow("0")
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