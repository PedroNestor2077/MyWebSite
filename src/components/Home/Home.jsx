import React,{useState} from "react"
import {HomeS,Title,CodeIcon,Text,HomeContainer} from "./HomeStyle.js"
import {RiCodeSSlashLine} from "react-icons/ri"
import {FiTerminal} from "react-icons/fi"
import ReactTypingEffect from 'react-typing-effect';


function Home(){
	const text=
	[
	"#OPEN TO WORK",
	"DESENVOLVEDOR FRONT-END",
	"DESENVOLVEDOR REACT JS"
	]
	return(
		<HomeS>
			<HomeContainer>
				<Title>
					<CodeIcon id="ad" >
						<img src="./images/ico_code.png" width="40px"/>
					</CodeIcon>
					<h2>Hi, i'm Pedro :)</h2>
				</Title>
				<Text>
					<h3>DESENVOLVEDOR FRONT-END</h3>
					<h3>CIENTISTA DA COMPUTAÇÃO</h3>
					<h3>PROGRAMADOR JAVASCRIPT</h3>
					<span>
						<FiTerminal  id="TerminalIcon" size="20px"/>
						<ReactTypingEffect id="AnimattedText"
							text={text} 
							speed={50} 
							eraseSpeed={50} 
							eraseDelay={1500} 
							typingDelay={1000}
							/>
					</span>
				</Text>
			</HomeContainer>
		</HomeS>
		);
}

export default Home