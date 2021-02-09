import React from 'react'
import {ProjectBoxS,ProjectInfo,ProjectList,ProjectLink} from "./projectsStyle.js"
import ImgSlider from "./imgSlider"
import {IoIosArrowForward,IoIosArrowBack} from 'react-icons/io'

function ProjectBox(props){
	return(
		<ProjectBoxS id="box">
			<ProjectInfo id="ProjectInfo">
				<h2>{props.title}</h2>
				<ul>
					<li>{props.goals}</li>
					<li><ProjectLink href={props.surce} target="_blank">Ver código fonte</ProjectLink></li>
					<li>{props.tecnology}</li>
					<li>{props.date}</li>
					<li>{props.status}</li>
				</ul>
			</ProjectInfo>
			<ImgSlider images={props.images} />
		</ProjectBoxS>
	)
}

export default ProjectBox