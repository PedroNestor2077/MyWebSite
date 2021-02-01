import styled from "styled-components"

export const AbboutS=styled.div`
	display:flex;
	flex-direction:column;
	background-color:rgba(0,0,10,.98);
	width:100%;
	height:auto;
`;

export const Title=styled.div`
	display:flex;
	flex-direction:column;
	justify-content:center;
	background-color:transparent;
	align-items:center;
	width:100%;
	height:auto;
	color:white;
	font-size:30px;
	div{
		font-size:45px;
		width:110px;
		height:50%;
		background-color:rgba(0,191,255,.9);
	}
	h2{
		margin:5px;
	}
`;

export const ContentS=styled.div`
	margin-top:50px;
	display:flex;
	align-items:center;
	justify-content:center;
	width:100%;
	height:100%;
	@media (max-width:720px){
		flex-direction:column;
		height:auto;
		#img{
			justify-content:center;
			width:100%;
			img{
				margin-right:0px;
			}
		}
		#text{
			text-align:center;
			width:95%;
			height:auto;
		}
	}
`;

export const ItenText=styled.div`
	display:flex;
	flex-direction:column;
	justify-content:center;
	background-color:transparent;
	width:60%;
	height:100%;
	text-align:left;
	align-items:flex-start;
	color:white;
	font-size:110%;
	h2{
		margin:0px;
	}
	p{
		margin:10px;
	}
`;

export const ItenImg=styled.div`
	display:flex;
	justify-content:flex-end;
	background-color:transparent;
	align-items:center;
	width:40%;
	height:100%;
	img{
		margin-top:50px;
		margin-right:40px;
		width:70%; 
		height:70%;
		max-width:320px;
		max-height:420px;
	}
`;
