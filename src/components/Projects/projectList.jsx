import React from 'react'
import {ProjectListS} from "./projectsStyle.js"
import ProjectBox from "./projectBox"


function ProjectList(props){

	return(
		<ProjectListS >
			<ProjectBox 
				title="Site TikTim" 
				tecnology='HTML,CSS3,JavaScript,AOS'
				goals="Desenvolvido para apresentar os produtos da TIKTIM"
				surce="https://github.com/PedroNestor2077/TikTim-SITE"
				date="12/03/2020 - 23/05/2020"
				status="Finalizado"
			/>
			
		</ProjectListS>
	)
}

export default ProjectList