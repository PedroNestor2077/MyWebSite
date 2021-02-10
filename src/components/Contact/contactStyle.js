import styled from 'styled-components'
import {Link} from '../genericStyles'

export const ContactS=styled.div`
	display:flex;
	flex-direction:column;
	align-items:center;
	background-color:#111;
	width:100%;
	height:auto;
	h4{
		margin-top:50px;
		color:white;
	}
`;

export const ContactList=styled.div`
	margin-bottom:50px;
	background-color:transparent;
	display:flex;
	width:80%;
	align-items:center;
	height:auto;
	border-radius:10px;
	a{
		margin:20px;
	}
	@media(max-width:800px){
		flex-direction:column;
		width:100%;
		#emailContainer{
			width:100%
		}
		#contacts{
			width:100%;
			span{
				margin:0px;
				margin-top:20px;
				a{
					margin:0px;
				}
			}
		}
	}
`;

export const EmailS=styled.div`
	background-color:rgba(transparent);
	color:white;
	width:50%;
	border-radius:10px;
	form{
		.MuiFilledInput-underline:after{
			border-bottom:solid 2px rgb(0,191,255);

		}
		.MuiFormLabel-root.Mui-focused{
			color:rgb(0,191,255);
		}

		textarea{
			::-webkit-input-placeholder{
				color:white;
				font-size:20px;
				font-family: "Roboto", "Helvetica", "Arial", sans-serif;
			    font-weight: 400;
			    line-height: 1;
			    letter-spacing: 0.00938em;
			}	
			background-color:transparent;	
			color:white;	
			outline: thin dotted;
		    outline: 0px auto -webkit-focus-ring-color;
		    outline-offset: 0px;
		}
		label{
			color:white;
			&:after{
				color:red;
			}
		}
		background-color:transparent;
		border-radius:10px;
		display:flex;
		flex-direction:column;
		button{
			margin-top:13px;
			background-color:transparent;
			border:solid 2px rgb(0,191,255);
			&:hover{
				background-color:rgba(0,191,255,.4)
			}
		}
		textarea{
			border-radius:5px;
		}
		input{
			border-bottom:solid 2px white;
			color:white;
			&:before{
				border-bottom:solid 2px red;
			}
			
		}
		
	}
`;

export const OtherContacts=styled.div`
	display:flex;
	flex-direction:column;
	justify-content:center;
	align-items:center;
	width:50%;
	span{
		margin:20px;
		color:white;
	}
`;

export const Loading=styled.div`
	display:flex;
	justify-content:center;
	align-items:center;
	width:100vw;
	height:100vh;
	background-color:rgba(0,0,0,.5);
	position:fixed;
	top:0;
	left:0px;
`;

export const Notfy=styled.div`
	display:flex;
	justify-content:center;
	align-items:center;
	width:100vw;
	height:80px;
	background-color:${props => `${props.color}`};
	position:fixed;
	bottom:${props => `${props.show}px`};
	left:0px;
	transition:all .5s;
`;

export const ContactLink=styled(Link)`
	
`;
