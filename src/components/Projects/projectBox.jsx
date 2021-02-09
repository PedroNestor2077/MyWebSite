import React from 'react'
import {ProjectBoxS,ProjectInfo,ProjectList} from "./projectsStyle.js"
import ImgSlider from "./imgSlider"
import {IoIosArrowForward,IoIosArrowBack} from 'react-icons/io'

function ProjectBox(props){
	return(
		<ProjectBoxS id="box">

			<ProjectInfo id="ProjectInfo">
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