import React,{useState} from 'react'
import {HeaderS,Logo,ImgLogo} from "./headerStyle.js"
import SideBar from "./sideBar"
import NavBar from "./navBar"

function Header(){
    var logo="images/logoSite.png"
    return(

        <HeaderS>
            <Logo>
                <ImgLogo src={logo}>
                </ImgLogo>
            </Logo>
            <NavBar/>
            <SideBar/>
        </HeaderS>

    )
}
export default Header