import React from 'react'
import {ContactS,ContactList,OtherContacts} from './contactStyle.js'
import {Title} from "../Projects/projectsStyle"
import Email from "./email"
function Contact(){
	return(
		<ContactS>
			<Title >
				<div>03</div>
				<h2>Contato</h2>
			</Title>
			<h3>Me envie uma mensagem! estou sempre online :)</h3>
			<ContactList>
				<Email/>
				<OtherContacts>
					<a>WhatsApp: (xx)y yyyyyyyy</a>
					<a>Instagram - @pedro_yyy</a>
					<a>contato.pedronestor@gmail.com</a>
				</OtherContacts>
				
			</ContactList>		
		</ContactS>
		)
}
export default Contact