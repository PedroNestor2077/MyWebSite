import React from 'react'
import {ProjectBoxS,ProjectInfo} from "./projectsStyle.js"
import ImgSlider from "./imgSlider"

function ProjectBox(props){
	return(
		<ProjectBoxS color={props.color}>
			<ProjectInfo>
				<h2>{props.title}</h2>
				<ul>
					<li>{props.goals}</li>
					<li><a href={props.surce}>Ver código fonte</a></li>
					<li>{props.tecnology}</li>
					<li>{props.date}</li>
					<li>{props.status}</li>
				</ul>
			</ProjectInfo>
			<ImgSlider images={props.images}/>
		</ProjectBoxS>
	)
}

export default ProjectBox