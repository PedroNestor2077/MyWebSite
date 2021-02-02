import React from 'react'
import {ProjectsS,Title} from "./projectsStyle.js"
import ProjectList from "./projectList"

function Projects(){
	return(
		<ProjectsS>
			<Title>
				<div>02</div>
				<h2>Projetos</h2>
			</Title>
			<ProjectList/>
		</ProjectsS>
	)
}
export default Projects