import React,{useState} from 'react'
import {SliderS,Switcher,Wrapper} from './sliderStyle.js'
import {GrNext,GrPrevious} from "react-icons/gr"
function Slider(props){
	const [ItenIndex,setItenIndex]=useState(0)
	const [Itens,setItens]=useState(props.itens)

	return (
		<SliderS Xsize={props.Xsize} Ysize={props.Ysize}>
			
			<Wrapper id="wrapper">
				{Itens}
			</Wrapper>
			
			<Switcher id="prev"
				onClick={()=>{
					let wrapper=document.getElementById("wrapper")
					wrapper.scrollTo(window.innerWidth,0)
					}}>
				<GrPrevious size='100%'/>
			</Switcher>
			<Switcher id="next"
				onClick={()=>setItenIndex(ItenIndex+1)}>
				<GrNext size='100%'/>
			</Switcher>

		</SliderS>
		)
}

export default Slider