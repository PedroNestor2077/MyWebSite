import React,{useState} from "react"
import {ImgSliderS,Image,ProjectList} from "./projectsStyle.js"
import {IoIosRadioButtonOff,IoIosRadioButtonOn} from "react-icons/io"
import { Radio,RadioGroup,FormControl,FormControlLabel} from '@material-ui/core';

function ImgSlider(props){

	function changeImg(event){
		let value=event.target.value
		setBoxMargin(value*-300)
	};

	const [BoxMargin,setBoxMargin]=useState(0)
	
	return(
		<ImgSliderS>
			<Image>
				<ProjectList margin={BoxMargin}>
					<img src="./images/project-images/tiktim.png" width="300px"></img>
					<img src="./images/project-images/acorda.png" width="300px"></img>
					<img src="./images/project-images/estoque.png" width="300px"></img>
				</ProjectList>
			</Image>
			<FormControl component="fieldset" >
			  <RadioGroup aria-label="gender" name="gender1" >
			    <FormControlLabel 
			    	control={
			    		<Radio 
			    			value={0}
			    			size='small' 
			    			color='primary' 
			    		/>}
			    	onClick={changeImg}  />
			    <FormControlLabel 
			    	control={
			    		<Radio
			    			value={1} 
			    			size='small'
			    			color='primary' 
			    		/>}
			    	onClick={changeImg} />
			    <FormControlLabel 
			    	control={
			    		<Radio 
				    		value={2}
				    		size='small' 
				    		color='primary' 
				    	/>}
			     	onClick={changeImg} />
			  </RadioGroup>
			</FormControl>
		</ImgSliderS>
	)
}

export default ImgSlider