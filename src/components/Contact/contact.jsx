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
				<OtherContacts>
					<a href="https://web.whatsapp.com/send?phone=5535997412678" target="_blank">WhatsApp: (xx)y yyyyyyyy</a>
					<a href="https://www.instagram.com/pedro__yyy/" target="_blank"
						>Instagram - @pedro_yyy</a>
					<a>contato.pedronestor@gmail.com</a>
				</OtherContacts>
			</ContactList>		
		</ContactS>
		)
}
export default Contact