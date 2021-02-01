import React,{useState} from 'react'
import {HeaderS,Logo,ImgLogo,ScrollDownButton,ScrollDownContainer} from "./headerStyle.js"
import SideBar from "./sideBar"
import NavBar from "./navBar"
import {RiArrowDownLine} from "react-icons/ri"

function Header(){
    const [PrevScroll,setPrevScroll]=useState()
    window.onscroll=()=>{
        var teste=document.getElementById("teste1")
        if(window.scrollY>1){
            teste.style.position="fixed"
            teste.style.top="-80px"
            if (PrevScroll>window.scrollY){
                teste.style.top="0px"
                teste.style.background="black"
            }
            else{
                teste.style.top="-80px"
            }
        }else{
            teste.style.position="absolute"
            teste.style.background="transparent"
        }
        setPrevScroll(window.scrollY)
    };

    var logo="images/logoSite.png"
    return(
        <HeaderS id="teste1">
            <Logo>
                <ImgLogo src={logo}>
                </ImgLogo>
            </Logo>
            <NavBar/>
            <SideBar/>
            <ScrollDownContainer>
                <label for="scrollbutton">Avançar</label>
                <ScrollDownButton href="facebook.com" id="scrollbutton">
                    <RiArrowDownLine size="20px"/>
                </ScrollDownButton>
            </ScrollDownContainer>
        </HeaderS>

    )
}
export default Header