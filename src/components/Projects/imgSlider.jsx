import React,{useState} from "react"
import {ImgSliderS,Image} from "./projectsStyle.js"
import {IoIosRadioButtonOff,IoIosRadioButtonOn} from "react-icons/io"
import { Radio,RadioGroup } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core';

import { FormLabel } from '@material-ui/core';


function ImgSlider(props){

	function changeImg(event){
		let value=event.target.value
		setImg(value)
	};
	const [Img,setImg]=useState(props.images[0])
	
	return(
		<ImgSliderS>
			<Image>
				<img src={Img}></img>
			</Image>
			<FormControl component="fieldset">
			  <RadioGroup aria-label="gender" name="gender1" >
			    <FormControlLabel 
			    	value={props.images[0]} 
			    	control={
			    		<Radio 
			    			size='small' 
			    			color='primary' 
			    	/>}onClick={changeImg}  />
			    <FormControlLabel 
			    	value={props.images[1]} 
			    	control={
			    		<Radio 
			    			size='small'
			    			 color='primary' 
			    			/>}onClick={changeImg} />
			    <FormControlLabel 
			    	value={props.images[2]} 
			    	control={
			    		<Radio 
			    		size='small' 
			    		color='primary' 
			    />} onClick={changeImg} />
			  </RadioGroup>
			</FormControl>
		</ImgSliderS>
	)
}

export default ImgSlider