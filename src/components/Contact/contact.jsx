import React from 'react'
import {ContactS,ContactList,OtherContacts} from './contactStyle.js'
import {Title} from "../genericStyles"
import Email from "./email"
function Contact(){
	return(
		<ContactS id="contact">
			<Title >
				<h3>03</h3>
				<h2>Contato</h2>
			</Title>
			<h4>Me envie uma mensagem! estou sempre online :)</h4>
			<ContactList>
				<Email/>
				
			</ContactList>		
		</ContactS>
		)
}
export default Contact