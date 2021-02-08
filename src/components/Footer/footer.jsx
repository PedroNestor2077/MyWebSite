import React from 'react'
import {FooterS,UpButton} from "./footerStyle"
import {BiArrowToTop} from "react-icons/bi"
function Footer(){
	return(
		<FooterS>
			<p>
				Copyright 2021. | desenvolvido por <strong>Pedro Nestor</strong>
			</p>
			<UpButton onClick={()=>{
				window.scrollTo(0,0)
				}}>
				<BiArrowToTop size="30px"/>
			</UpButton>
		</FooterS>
		)
}

export default Footer