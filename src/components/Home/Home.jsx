import React,{useState} from "react"
import {HomeS,HomeTitle,CodeIcon,Text,HomeContainer,ScrollDownButton} from "./HomeStyle.js"
import {FiTerminal} from "react-icons/fi"
import ReactTypingEffect from 'react-typing-effect';
import SideBar from "./sideBar"
import {BsChevronCompactDown} from 'react-icons/bs'
import {TitleCodeIcon} from "../ImgSurce.js"

function Home(){
	const text=
	[
		"#OPEN TO WORK",
		"PROGRAMADOR JAVASCRIPT",
		"DESENVOLVEDOR FRONT-END"
	]
	return(
		<HomeS>
			<HomeContainer>
				<SideBar/>
				<HomeTitle>
					<CodeIcon>
						<img src={TitleCodeIcon} width="40px"/>
					</CodeIcon>
					<h2>Hi, i'm Pedro :)</h2>
				</HomeTitle>
				<Text>

					
					
					<h3>PROGRAMADOR PYTHON</h3>
					<h3>DESENVOLVEDOR REACT JS</h3>
					<h3>DESENVOLVEDOR DE APLICATIVOS</h3>
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
			<ScrollDownButton href='#abbout'>
					<BsChevronCompactDown size="100%" id="ico"/>
				</ScrollDownButton>
		</HomeS>
		);
}

export default Home