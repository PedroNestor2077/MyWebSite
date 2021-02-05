import React,{useState} from "react"
import {ImgSliderS,Image} from "./projectsStyle.js"
import Switcher from "./switcher"
function ImgSlider(props){
	const [Index,setIndex]=useState(0)
	return(
		<ImgSliderS>
			<Image>
				<img src={props.images[Index]} width="500px"></img>
			</Image>
			<Switcher></Switcher>
		</ImgSliderS>
	)
}

export default ImgSlider