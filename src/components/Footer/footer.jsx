import React from 'react'
import {FooterS,UpButton} from "./footerStyle"
import {BiUpArrowCircle} from "react-icons/bi"
function Footer(){
	return(
		<FooterS>
			<p>
				Copyright 2021. | desenvolvido por <strong>Pedro Nestor</strong>
			</p>
			<UpButton href="#">
				<BiUpArrowCircle size="30px"/>
			</UpButton>
		</FooterS>
		)
}

export default Footer