import React from 'react'
import {ProjectsS,Title,Wrapper} from "./projectsStyle.js"
import ProjectBox from "./projectBox"
function Projects(){
	const Images=["./images/project-images/tiktim.png","./images/project-images/acorda.png"]
	return(
		<ProjectsS>
			<Title >
				<div>02</div>
				<h2>Projetos</h2>
			</Title>
			<Wrapper id="wrapper">
				<ProjectBox images={Images}></ProjectBox>
				<ProjectBox images={Images}></ProjectBox>
				<ProjectBox images={Images}></ProjectBox>
				<ProjectBox images={Images}></ProjectBox>
			</Wrapper>
		</ProjectsS>
	)
}
export default Projects