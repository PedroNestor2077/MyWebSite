import React,{useState} from 'react'
import {HeaderS,Logo,ImgLogo} from "./headerStyle.js"
import NavBar from "./navBar"
import {RiArrowDownLine} from "react-icons/ri"
import {logo} from "../ImgSurce.js"

function Header(){
    const [PrevScroll,setPrevScroll]=useState()
    window.onscroll=()=>{
        var header=document.getElementById("header")
        if(window.scrollY>1){
            header.style.position="fixed"
            header.style.top="-80px"
            if (PrevScroll>window.scrollY){
                header.style.top="0px"
                header.style.background="black"
            }
            else{
                header.style.top="-80px"
            }
        }else{
            header.style.position="absolute"
            header.style.background="transparent"
        }
        setPrevScroll(window.scrollY)
    };

    return(
        <HeaderS id="header">
            <Logo>
                <ImgLogo src={logo}/>
            </Logo>
            <NavBar/>
        </HeaderS>

    )
}
export default Header