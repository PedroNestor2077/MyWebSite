import React,{useState} from "react"
import {SliderS,Iten,SetIten} from "./abboutStyle.js"
import {GrNext,GrPrevious} from "react-icons/gr"
import BusinessItem from './business'
import ItenLayout from "./itenLayout"
function Slider(props){

	const [SliderIten,setSliderIten]=useState(<ItenLayout/>)

	return(
		<SliderS>
			<SetIten id="prevIten">
				<GrPrevious size="50px"/>
			</SetIten>
			<SetIten id="nextIten">
				<GrNext size="50px"/>
			</SetIten>
			<ItenLayout/>
		</SliderS>
	);
};
export default Slider

