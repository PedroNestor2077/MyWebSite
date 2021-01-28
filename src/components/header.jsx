import React,{useState} from 'react'
import {HeaderS,Logo,ImgLogo} from "./style.js"
import SmallNav from "./smallNav"
import FullNav from "./fullNav"
function Header(props){
    var logo="images/logoSite.png"
    const [Nav,setNav]=useState("")
    
    /* This functions return width and height info to use in breackPoints */
    window.onresize=()=>{
        if(props.breakPointRules(window.innerWidth,window.innerHeight)){
            setNav(<FullNav></FullNav>)
        }else{
            setNav(<SmallNav></SmallNav>)
        }
    }
    window.onload=()=>{
        if(props.breakPointRules(window.innerWidth,window.innerHeight)){
            setNav(<FullNav></FullNav>)
        }else{
            setNav(<SmallNav></SmallNav>)
        }
    } 

    return(
        <HeaderS>
            <Logo>
                <ImgLogo src={logo}>
                </ImgLogo>
            </Logo>
            {Nav}
        </HeaderS>
    )
}
export default Header