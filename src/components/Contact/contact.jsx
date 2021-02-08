import React from 'react'
import {ContactS,ContactList,OtherContacts} from './contactStyle.js'
import {Title} from "../genericStyles"
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
					<a href="https://web.whatsapp.com/send?phone=5535997412678" target="_blank">WhatsApp: (xx)y yyyyyyyy</a>
					<a>Instagram - @pedro_yyy</a>
					<a>contato.pedronestor@gmail.com</a>
				</OtherContacts>
			</ContactList>		
		</ContactS>
		)
}
export default Contact