import React,{useState} from 'react'
import {SwitcherS} from "./projectsStyle.js"
import {IoIosRadioButtonOff,IoIosRadioButtonOn} from "react-icons/io"
function Switcher(props){
	const [Icon,setIcon]=useState(<IoIosRadioButtonOn/>)
	return(
		<SwitcherS>
			<IoIosRadioButtonOff/>
		</SwitcherS>
	)
}

export default Switcher
