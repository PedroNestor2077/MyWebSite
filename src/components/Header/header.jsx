import React,{useState} from 'react'
import {HeaderS,Logo,ImgLogo,ScrollDownButton} from "./headerStyle.js"
import SideBar from "./sideBar"
import NavBar from "./navBar"
import {RiArrowDownLine} from "react-icons/ri"

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
            <ScrollDownButton>
                <RiArrowDownLine size="50px"/>
            </ScrollDownButton>
        </HeaderS>

    )
}
export default Header