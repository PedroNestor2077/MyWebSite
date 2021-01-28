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
                <InstagramIcon/>
            </NavButton>
            <NavButton>
                <GitHubIcon/>
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
