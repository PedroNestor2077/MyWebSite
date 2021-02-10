import React from 'react'
import {ProgramerS,ItenText,ItenImg} from "./abboutStyle.js"
import {Link} from '../genericStyles'
function Programer(){
	
	return(
			<ProgramerS id="ProgramerS">
				<ItenImg >
						<img 
							src="./images/MyPhoto.png" alt="MyPhoto" width='100%'>
						</img>
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
						Foi ai que que descobriu sua paixão por códigos!<br/>
						Desde então vem desenvolvendo sites e WebApps de 
						diversas maneiras ,
						utilizando dos principais conceitos e 
						tecnologias para entregar ao usuário a melhor usabilidade e experiencia.
					</p>
					<p>
						Atualmente vem se aprofundando cada vez mais em <Link>ReactJS </Link>
						,desenvolvendo projetos open-source e contribuindo com 
						a comunidade e
						sempre procurando melhorar a vida das pessoas a
						través da tecnologia!
					</p>
				</ItenText>
			</ProgramerS>
	)
};

export default Programer
