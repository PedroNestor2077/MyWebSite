import React from 'react'
import {ContactS,ContactList,OtherContacts,ContactLink} from './contactStyle.js'
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
				<OtherContacts id="contacts">
					<span>
						<ContactLink >contato.pedronestor@gmail.com</ContactLink>

					</span>
					<span>
						whatsapp:<ContactLink href="https://web.whatsapp.com/send?phone=5535997412678" target='_blank'>(35)9 97412678</ContactLink>
					</span>
					<span>
						Instagram:<ContactLink href="https://www.instagram.com/pedro__yyy/" target='_blank'>pedro_yyy</ContactLink>
					</span>

				</OtherContacts>
			</ContactList>		
		</ContactS>
		)
}
export default Contact