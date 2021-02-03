import React from 'react'
import {ProgramerS,ItenText,ItenImg} from "./abboutStyle.js"
import {CSSTransition} from 'react-transition-group';

function Programer(props){
	
	return(
		<CSSTransition className="teste" in={true} appear={true}>
			<ProgramerS opacity={props.opacity}>
				<ItenImg id="img">
							<img src="./images/programer.png" alt="MyPhoto"></img>
					</ItenImg>
				<ItenText id="text">
					<h2>Pedro Nestor</h2>
					<p>
						<strong>
							Programador ,desenvolvedor e estudante de ciências da computação.
						</strong><br/>
						>Um apaixonado por tecnologia e afins;
					</p>
					<p>
						Iniciou os estudos em ciência da computação em 2020,
						com o foco em programação.<br/>
						Foi ai que que descobriu sua paixao por codigos!<br/>
						Desde então vem desenvolvendo sites e web apps de 
						diversas maneiras ,
						utilizando dos principais conceitos ,paradigmas e 
						tecnologias para entregar ao usuário a melhor usabilidade e experiencia.
					</p>
					<p>
						Atualmente vem se aprofundando cada vez mais em ReactJS
						,desenvolvendo projetos open-source e contribuindo com 
						a comunidade e
						sempre procurando melhorar a vida das pessoas a
						través da tecnologia!
					</p>
				</ItenText>
			</ProgramerS>
		</CSSTransition>
	)
};

export default Programer