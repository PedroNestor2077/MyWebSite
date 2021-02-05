import styled from "styled-components"

export const AbboutS=styled.div`
	display:flex;
	flex-direction:column;
	background-color:rgba(0,0,10,.98);
	align-items:center;
	width:100%;
	height:auto;
	#fade{
		width:100%;
		height:100%;
	}
	span{
		display:flex;
		justify-content:space-between;
		width:200px;
		#Drum		{
			border-bottom:solid rgb(0,191,255) ${props => `${props.borderDrum}px`};
		}
		#Prog{
			border-bottom:solid rgb(0,191,255) ${props => `${props.borderProg}px`};
		}
	}
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

export const ProgramerS=styled.div`
	
	display:flex;
	align-items:center;
	justify-content:center;
	width:100%;
	height:100%;
	animation:fadeIn 2s;
	@media (max-width:800px){
		flex-direction:column;
		height:auto;
		margin-top:20px;
		#img{
			justify-content:center;
			width:90%;
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

export const DrummerS=styled.div`
	display:flex;
	flex-direction:column;
	align-items:center;
	justify-content:center;
	width:100%;
	height:100%;
	color:white;
	font-size:110%;
	text-align:center;
	h2{
		margin:0px;
	}
	p{
		margin:10px;
	}
	animation:fadeIn 2s;
	@keyframes fadeIn { 
		from{
			opacity:0;
		}
		to{
			opacity:1;
		}
	}
`;

export const IteniFrame=styled.div`
	display:flex;
	flex-direction:column;
	justify-content:center;
	background-color:transparent;
	width:100%;
	height:100%;
	text-align:left;
	align-items:center;
	
`;
export const ItenImgDrummer=styled.div`
	display:flex;
	justify-content:center;
	background-color:transparent;
	align-items:center;
	width:100%;
	height:100%;
	img{
		justify-content:center;
		width:100%;
		max-width:700px;
		height:auto;
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
	width:50%;
	height:100%;
	img{
		margin-left:30px;
		width:430px;
		height:520px;
	}
`;

export const AbboutButton=styled.button`
	background-color:transparent;
	border:none;
	width:70px;
	color:white;
	cursor:pointer;
	outline: thin dotted;
    outline: 0px auto -webkit-focus-ring-color;
    outline-offset: 0px;
`;