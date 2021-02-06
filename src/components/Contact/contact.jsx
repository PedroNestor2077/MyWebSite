import React from 'react'
import {ContactS,ContactList} from './contactStyle.js'
import {Title} from "../Projects/projectsStyle"
import Email from "./email"
function Contact(){
	return(
		<ContactS>
			<Title >
				<div>03</div>
				<h2>Contato</h2>
			</Title>
			<Email/>
			<ContactList>
				<a>Envie um email</a>
				<a>WhatsApp: (xx)y yyyyyyyy</a>
				<a>Instagram - @pedro_yyy</a>
				<a>contato.pedronestor@gmail.com</a>
			</ContactList>		
		</ContactS>
		)
}
export default Contact