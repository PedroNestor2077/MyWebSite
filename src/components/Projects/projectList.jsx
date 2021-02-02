import React from 'react'
import {ProjectListS} from "./projectsStyle.js"
import ProjectBox from "./projectBox"


function ProjectList(props){

	return(
		<ProjectListS>
			<ProjectBox title="title"/>
			<ProjectBox title="title"/>
			<ProjectBox title="title"/>
			<ProjectBox title="title"/>
		</ProjectListS>
	)
}

export default ProjectList