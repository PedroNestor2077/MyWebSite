import React from 'react'
import {AbboutS,Title} from "./abboutStyle.js"
import Content from "./content"
function Abbout(){
	return(
		<AbboutS>
			<Title>
				<div>01</div>
				<h2>Sobre</h2>
			</Title>
			<Content />
		</AbboutS>
	)
}
export default Abbout