import React from "react"
import {HomeS,Title,CodeIcon,Text,HomeContainer} from "./HomeStyle.js"
import {RiCodeSSlashLine} from "react-icons/ri"

function Home(){
	return(
		<HomeS>
			<HomeContainer>
				<Title>
					<CodeIcon>
						<RiCodeSSlashLine size="100%"/>
					</CodeIcon>
					<h2>PEDRO NESTOR</h2>
				</Title>
				<Text>
					<h3>DESENVOLVEDOR FRONT-END</h3>
					<h3>CIENTISTA DA COMPUTAÇÃO</h3>
					<h3>PROGRAMADOR JAVASCRIPT</h3>
					<h1 class="ml11">
					  <span class="text-wrapper">
					    <span class="line line1"></span>
					    <span class="letters">Hello World</span>
					  </span>
					</h1>
				</Text>
			</HomeContainer>
		</HomeS>
		);
}

export default Home