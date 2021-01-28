import React from 'react'
import {NavBar,NavButton} from "./style.js"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

/* THAT COMPONENT WILL BE RETURNED TO HEADER ON TRUE VALUE */
function FullHeader(){

    return(
        <NavBar>
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

            <NavButton 
                href="https://www.linkedin.com/in/pedro-nestor-a67241200/">
                <LinkedInIcon/>
            </NavButton>

            <NavButton
                href="https://github.com/PedroNestor2077">
                <GitHubIcon/>
            </NavButton>

        </NavBar>
    )
}
export default FullHeader