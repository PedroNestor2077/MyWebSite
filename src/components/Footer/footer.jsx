import React from 'react'
import {FooterS} from "./footerStyle"
import {BiArrowToTop} from "react-icons/bi"
function Footer(){
	return(
		<FooterS>
			<p>
				Copyright 2021. | desenvolvido por <strong>Pedro Nestor</strong>
			</p>
			<button onClick={()=>{
				window.scrollTo(0,0)
				}}>
				<BiArrowToTop size="30px"/>
			</button>
		</FooterS>
		)
}

export default Footer