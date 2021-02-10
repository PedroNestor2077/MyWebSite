import React,{useState} from "react"
import {ImgSliderS,Image,ProjectList} from "./projectsStyle.js"
import {IoIosRadioButtonOff,IoIosRadioButtonOn} from "react-icons/io"
import { Radio,RadioGroup,FormControl,FormControlLabel} from '@material-ui/core';

function ImgSlider(props){

	function changeImg(event){
		let value=event.target.value
		setBoxMargin(value*-300)
		setFormValue(parseInt(value))
	};
	console.log(props.images)
	const [Buttons,setButtons]=useState(
		props.images.map((img,index)=>(
			<FormControlLabel 
			    	control={
			    		<Radio 
			    			value={index}
			    			size='small' 
			    			color='primary' 
			    			name="gender1"
			    		/>}
			    	onClick={changeImg}  />
			))
		)
	const [FormValue,setFormValue]=useState(0)
	const [BoxMargin,setBoxMargin]=useState(0)
	return(
		<ImgSliderS id="ImgSlider">
			<Image id="Image">
				<ProjectList margin={BoxMargin} >
					{props.images.map((img) =>(<img src={img} width="300px" className="ProjectImage"></img>))}
				</ProjectList>
			</Image>
			<FormControl >
			  <RadioGroup  name="gender1" value={FormValue} >
			    {Buttons}
			  </RadioGroup>
			</FormControl>
		</ImgSliderS>
	)
}

export default ImgSlider