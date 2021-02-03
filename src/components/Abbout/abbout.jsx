import React,{useState} from 'react'
import {AbboutS,Title,AbboutButton} from "./abboutStyle.js"
import Programer from "./programer"
import Drummer from "./drummer"
import { TransitionGroup} from 'react-transition-group';
import {GiDrum} from "react-icons/gi"
import {AiOutlineCode} from "react-icons/ai"

function Abbout(props){
	const [inProp, setInProp] = useState(false);
	const [Content,setContent]=useState(<Programer/>)
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
						setContent(<Programer opacity={1}/>)
						setBorderDrum(0)
						setBorderProg(3)
					}
					}>
					<AiOutlineCode size="100%"/>
				</AbboutButton>
				<AbboutButton 	
					id="Drum"
					onClick={()=>{
						setContent(<Drummer/>)
						setBorderProg(0)
						setBorderDrum(3)
					}
					}>
					<GiDrum size="100%"/>
				</AbboutButton>
			</span>
			{Content}
		</AbboutS>
	)
}
export default Abbout