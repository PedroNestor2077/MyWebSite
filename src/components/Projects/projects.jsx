import React,{useState} from 'react'
import {ProjectsS,Wrapper,HandleButton,ProjectList} from "./projectsStyle.js"
import {Title} from '../genericStyles.js'
import ProjectBox from "./projectBox"
import {GrNext,GrPrevious} from 'react-icons/gr'
import {MdNavigateNext,MdNavigateBefore} from "react-icons/md"
import {ProjectImages} from "../ImgSurce.js"
function Projects(){

	const [BoxMargin,setBoxMargin]=useState(0)

	window.onresize=()=>{
		setBoxMargin(0)
	}
	/* this functions make the slider work*/
	function Next(){
		let boxSize=(document.getElementById('box')).clientWidth
		const maxMargin=(boxSize*3)
		if (BoxMargin!==(maxMargin*-1)){
			setBoxMargin(BoxMargin-boxSize)
		}	
	}
	function Prev(){
		let boxSize=(document.getElementById('box')).clientWidth
		const maxMargin=(boxSize*3)
		if (BoxMargin!==0){
			setBoxMargin(BoxMargin+boxSize)
		}
	}
	return(

		<ProjectsS id='Projects'>
			<Title >
				<h3>02</h3>
				<h2>Projetos</h2>
			</Title>
			<Wrapper id="wrapper">
				<HandleButton id="next" onClick={Next}>
					<MdNavigateNext size="50px" />
				</HandleButton>
				<HandleButton id="prev" onClick={Prev}>
					<MdNavigateBefore size="50px"/>
				</HandleButton>

				<ProjectList margin={BoxMargin}>
					<ProjectBox 
						images={ProjectImages.tiktim}
						title="Site TIKTIM"
						surce="https://github.com/PedroNestor2077/TikTim-SITE"
						goals="Site de Apresentação dos produtos tiktim"
						tecnology="HTML5, CSS3, JavaScript"
						date="03/04/20-05/06/20"
						status="Finalizado"
					></ProjectBox>
					<ProjectBox 
						images={ProjectImages.acordaNet}
						title="Acorda.net"
						goals="WebApp com dispertador,timer e cronômetro"
						surce="https://github.com/PedroNestor2077/Acorda.net"
						tecnology="HTML5, CSS3, JavaScript"
						date="03/04/20-05/06/20"
						status="Finalizado"
					></ProjectBox>
					<ProjectBox 
						images={ProjectImages.utilitarioTiktim}
						title="Utilitário TIKTIM"
						goals='Programa de controle de produção e gestao'
						surce="https://github.com/PedroNestor2077/Utilitario-Tiktim"
						tecnology="Python, Tkinter(GUI), SQLite3"
						date="03/04/20-05/06/20"
						status="Finalizado"
					></ProjectBox>
					<ProjectBox 
						images={ProjectImages.cadastro}
						title="Cadastro GiveUp"
						goals="Sistema de cadastro e controle de usuários"
						surce="https://github.com/PedroNestor2077/Prova2SOW"
						tecnology="HTML5, CSS3, ReactJS, JsonServer"
						date="03/04/20-05/06/20"
						status="Finalizado"
					></ProjectBox>
				</ProjectList>
				
			</Wrapper>
		</ProjectsS>
	)
}
export default Projects