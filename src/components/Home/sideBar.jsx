import React,{useState} from 'react'
import {SideBarS,NavButton} from '../Header/headerStyle.js'
import {TiSocialLinkedin,TiSocialInstagram} from "react-icons/ti"
import { AiFillGithub,AiOutlineWhatsApp} from "react-icons/ai"
import {FaCode} from 'react-icons/fa'

function SideBar(){
    return(
        <SideBarS id="SideBarS">
             
            <NavButton 
                href="https://www.linkedin.com/in/pedro-nestor-a67241200/" target="_blank">
                <TiSocialLinkedin size="100%"/>
            </NavButton>    
            <NavButton
                href="https://www.instagram.com/pedro__yyy/" target="_blank">
                <TiSocialInstagram size="100%"/>
            </NavButton>
            <NavButton
                href="https://github.com/PedroNestor2077" target="_blank">
                <AiFillGithub size="100%"
                />
            </NavButton>
            <NavButton
                href="https://web.whatsapp.com/send?phone=5535997412678" target="_blank">
                <AiOutlineWhatsApp size="100%"/>
            </NavButton>
            <NavButton
                href="https://github.com/PedroNestor2077/MyWebSite" target="_blank">
                <FaCode size="100%"/>
            </NavButton>
        </SideBarS>
    )
}

export default SideBar
