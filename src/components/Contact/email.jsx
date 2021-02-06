import React,{useState} from 'react'
import {EmailS,Loading,Notfy} from "./contactStyle.js"
import emailjs from 'emailjs-com';
import EmailForm from "./form"
import { Backdrop } from '@material-ui/core';
import { CircularProgress } from '@material-ui/core';

function Email(){
	let form=document.getElementById('EmailForm')
	form.reset()
	const [Load,setLoad]=useState('')
	const [Show,setShow]=useState({
		color:'red',
		msg: 'Mensagem enviada com sucesso!',
		show: 0
	})
	function sendEmail(e) {
		setLoad(
			<Loading>
				<CircularProgress color="inherit" />
			</Loading>
			)
	    e.preventDefault();
	    emailjs.sendForm('service_at28hpz', 'template_viusqtw', e.target, 'user_F19ih9QTzf3M7ABnXKrXT')
	      .then((result) => {
	      		setLoad('')
	      		setShow(
	      			{
					color:'green',
					msg: 'Mensagem enviada com sucesso!',
					show: 0
					}
				)
	      		setTimeout(()=>{
	      				setShow(
	      					{
								color:'green',
								msg: 'Mensagem enviada com sucesso!',
								show: -80
							}
						)
	      			},1000)
	      }, (error) => {
	        	setLoad('')
	      		setShow(
	      			{
					color:'red',
					msg: 'Erro ao enviar.',
					show: 0
					}
				)
	      		setTimeout(()=>{
	      				setShow(
	      					{
								color:'red',
								msg: 'Erro ao enviar.',
								show: -80
							}
						)
	      			},1200)
	      });
  	}

	console.log(Show.show)


	return(
		<EmailS>
			<EmailForm action={sendEmail}/>
			{Load}
			<Notfy 
				show={Show.show}
				color={Show.color}
				>
	      		<p>
	      			{Show.msg}
	      		</p>
	      	</Notfy>

		</EmailS>
		)
}

export default Email