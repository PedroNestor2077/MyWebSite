import React,{useState} from 'react'
import {SideBarS,NavButton} from '../Header/headerStyle.js'
import {TiSocialLinkedin,TiSocialInstagram} from "react-icons/ti"
import { AiFillGithub,AiOutlineWhatsApp} from "react-icons/ai"
import { MdEmail } from "react-icons/md"

function SideBar(){
    return(
        <SideBarS id="SideBarS">
            <NavButton >
                <TiSocialLinkedin size="100%"/>
            </NavButton>    
            <NavButton>
                <TiSocialInstagram size="100%"/>
            </NavButton>
            <NavButton>
                <AiFillGithub size="100%"
                href="https://github.com/PedroNestor2077"/>
            </NavButton>
            <NavButton>
                <MdEmail size="100%"/>
            </NavButton>
            <NavButton>
                <AiOutlineWhatsApp size="100%"/>
            </NavButton>
        </SideBarS>
    )
}

export default SideBar
