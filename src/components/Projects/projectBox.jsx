import React from 'react'
import {ProjectBoxS,ProjectInfo} from "./projectsStyle.js"


function ProjectBox(props){

	return(
		<ProjectBoxS color={props.color}>
			<ProjectInfo>
				<h2>{props.title}</h2>
				<ul>
					<li><a href={props.surce}>Ver código fonte</a></li>
					<li>{props.goals}</li>
					<li>{props.tecnology}</li>
					<li>{props.date}</li>
					<li>{props.status}</li>

				</ul>
			</ProjectInfo>
			<img src="./images/project-images/tiktim.png" width="500px"></img>
		</ProjectBoxS>
	)
}

export default ProjectBox