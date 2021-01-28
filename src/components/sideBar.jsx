import React,{useState} from 'react'
import {SideBarS,NavButton} from './style'
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

function SideBar(){
    return(
        <SideBarS>
            <NavButton>
                <LinkedInIcon/>
            </NavButton>    
            <NavButton>
                <InstagramIcon 
                href="https://www.instagram.com/pedro__yyy/"/>
            </NavButton>
            <NavButton>
                <GitHubIcon 
                href="https://github.com/PedroNestor2077"/>
            </NavButton>
            <NavButton>
                <EmailIcon/>
            </NavButton>
            <NavButton>
                <WhatsAppIcon/>
            </NavButton>
        </SideBarS>
    )
}

export default SideBar
