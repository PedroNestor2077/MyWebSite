import React,{useState} from 'react'
import {AbboutS,Title} from "./abboutStyle.js"
import Programer from "./programer"
import Drummer from "./drummer"
import { TransitionGroup} from 'react-transition-group';


function Abbout(){
	const [inProp, setInProp] = useState(false);
	const [Content,setContent]=useState(<Programer/>)
	return(
		<AbboutS>
			<Title>
				<div>01</div>
				<h2>Sobre</h2>
			</Title>
			<span>
				<button onClick={()=>setContent(<Drummer/>)}>drummer</button>
				<button onClick={()=>setContent(<Programer/>)}>Programmer</button>
			</span>
			{Content}
		</AbboutS>
	)
}
export default Abbout