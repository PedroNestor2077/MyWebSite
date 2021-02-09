import React,{useState} from 'react'
import {HeaderS,Logo,ImgLogo} from "./headerStyle.js"
import NavBar from "./navBar"
import {RiArrowDownLine} from "react-icons/ri"
import {logo} from "../ImgSurce.js"

function Header(){
    const [PrevScroll,setPrevScroll]=useState()
    const [HeaderPosition,setHeaderPosition]=useState('absolute')
    const [HeaderBackground,setHeaderBackground]=useState('transparent')
    const [HeaderMargin,setheaderMargin]=useState(0)

    window.onscroll=()=>{
        if(window.scrollY>1){
            setHeaderPosition('fixed')
            setheaderMargin(-80)
            if (PrevScroll>window.scrollY){
                setheaderMargin(0)
                setHeaderBackground('#111')
            }
            else{
                setheaderMargin(-80)
            }
        }else{
            setHeaderPosition('absolute')
            setHeaderBackground('transparent')
        }
        setPrevScroll(window.scrollY)
    };

    return(
        <HeaderS 
            position={HeaderPosition}
            margin={HeaderMargin}
            background={HeaderBackground}
            id="header">
            <Logo>
                <ImgLogo src={logo}/>
            </Logo>
            <NavBar/>
        </HeaderS>

    )
}
export default Header