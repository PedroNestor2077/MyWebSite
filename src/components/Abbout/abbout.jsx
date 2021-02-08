import React,{useState} from 'react'
import {AbboutS,AbboutButton} from "./abboutStyle.js"
import Programer from "./programer"
import Drummer from "./drummer"
import {GiDrum} from "react-icons/gi"
import {AiOutlineCode} from "react-icons/ai"
import {Title} from "../genericStyles.js"

function Abbout(){
	const AbboutPages=[<Programer/>,<Drummer/>]
	const [Content,setContent]=useState(AbboutPages[0])
	const [BorderDrum,setBorderDrum]=useState(0)
	const [BorderProg,setBorderProg]=useState(3)
	return(
		<AbboutS borderDrum={BorderDrum} borderProg={BorderProg}>
			<Title>
				<div>01</div>
				<h2>Sobre</h2>
			</Title>
			<span >
				<AbboutButton 
					id="Prog"
					onClick={()=>{
						setContent(AbboutPages[0])
						setBorderDrum(0)
						setBorderProg(3)
					}}>
					<AiOutlineCode size="100%"/>
				</AbboutButton>
				<AbboutButton 	
					id="Drum"
					onClick={()=>{
						setContent(AbboutPages[1])
						setBorderProg(0)
						setBorderDrum(3)
					}}>
					<GiDrum size="100%"/>
				</AbboutButton>
			</span>
			{Content}
		</AbboutS>
	)
}

export default Abbout