import styled from 'styled-components'

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
	background-color:rgba(255,255,255,.8);
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

	}
`;

export const EmailS=styled.div`
	background-color:rgba(transparent);
	color:white;
	width:50%;
	border-radius:10px;
	form{
		background-color:transparent;
		border-radius:10px;
		display:flex;
		flex-direction:column;
		button{
			margin:3px;
		}
		textarea{
			border-radius:5px;
		}
		
	}
`;

export const OtherContacts=styled.div`
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
