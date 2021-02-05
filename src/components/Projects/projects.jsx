import React from 'react'
import {ProjectsS,Title,Wrapper} from "./projectsStyle.js"
import ProjectBox from "./projectBox"
function Projects(){
	const Images1=[
		"./images/project-images/tiktim.png",
		"./images/project-images/home.gif",
		"./images/project-images/tiktim.png"
	]
	const Images2=[
		"./images/project-images/acorda.png",
		"./images/project-images/acorda.gif",
		"./images/project-images/acorda.png"
	]
	const Images3=[
		"./images/project-images/estoque.png",
		"./images/project-images/estoque.png",
		"./images/project-images/estoque.png"
	]
	const Images4=[
		"./images/project-images/cadastro.png",
		"./images/project-images/cadastro.png",
		"./images/project-images/cadastro.png"
	]

	return(
		<ProjectsS>
			<Title >
				<div>02</div>
				<h2>Projetos</h2>
			</Title>
			<Wrapper id="wrapper">
				<ProjectBox 
					images={Images1}
					title="Site TIKTIM"
					surce="https://github.com/PedroNestor2077/TikTim-SITE"
					goals="Site de Apresentação dos produtos tiktim"
					tecnology="HTML5, CSS3, JavaScript"
					date="03/04/20-05/06/20"
					status="Finalizado"
				></ProjectBox>
				<ProjectBox 
					images={Images2}
					title="Acorda.net"
					goals="WebApp com dispertador,timer e cronômetro"
					surce="https://github.com/PedroNestor2077/Acorda.net"
					tecnology="HTML5, CSS3, JavaScript"
					date="03/04/20-05/06/20"
					status="Finalizado"
				></ProjectBox>
				<ProjectBox 
					images={Images3}
					title="Utilitário TIKTIM"
					goals='Programa de controle de produção e gestao'
					surce="https://github.com/PedroNestor2077/Utilitario-Tiktim"
					tecnology="Python, Tkinter(GUI), SQLite3"
					date="03/04/20-05/06/20"
					status="Finalizado"
				></ProjectBox>
				<ProjectBox 
					images={Images4}
					title="Cadastro GiveUp"
					goals="Sistema de cadastro e controle de usuários"
					surce="https://github.com/PedroNestor2077/Prova2SOW"
					tecnology="HTML5, CSS3, ReactJS, JsonServer"
					date="03/04/20-05/06/20"
					status="Finalizado"
				></ProjectBox>
			</Wrapper>
		</ProjectsS>
	)
}
export default Projects