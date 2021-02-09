import React,{useState} from "react"
import {ImgSliderS,Image,ProjectList} from "./projectsStyle.js"
import {IoIosRadioButtonOff,IoIosRadioButtonOn} from "react-icons/io"
import { Radio,RadioGroup,FormControl,FormControlLabel} from '@material-ui/core';

function ImgSlider(props){

	function changeImg(event){
		let value=event.target.value
		console.log(value)
		setBoxMargin(value*-300)
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
			    		/>}
			    	onClick={changeImg}  />
			))
		)
	
	const [BoxMargin,setBoxMargin]=useState(0)
	return(
		<ImgSliderS id="ImgSlider">
			<Image id="Image">
				<ProjectList margin={BoxMargin} >
					{props.images.map((img) =>(<img src={img} width="300px" className="ProjectImage"></img>))}
				</ProjectList>
			</Image>
			<FormControl component="fieldset" >
			  <RadioGroup aria-label="gender" name="gender1" >
			    {Buttons}
			  </RadioGroup>
			</FormControl>
		</ImgSliderS>
	)
}

export default ImgSlider