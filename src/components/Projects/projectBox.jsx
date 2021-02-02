import React from 'react'
import {ProjectBoxS} from "./projectsStyle.js"


function ProjectBox(props){

	return(
		<ProjectBoxS>
			<h1>{props.title}</h1>
			<img src="./images/project-images/tiktim.png" width="500px"></img>
		</ProjectBoxS>
	)
}

export default ProjectBox