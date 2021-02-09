import styled from "styled-components"
import {ButtonWithOutBorder,Link} from "../genericStyles"

export const AbboutS=styled.div`
	display:flex;
	flex-direction:column;
	background-color:#111;
	align-items:center;
	width:100%;
	height:auto;
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

export const ProgramerS=styled.div`
	display:flex;
	align-items:center;
	justify-content:center;
	width:100%;
	min-height:100vh;
	animation:AbboutfadeIn 2s;
	margin-top:50px;
	margin-bottom:50px;

`;

export const DrummerS=styled.div`
	display:flex;
	flex-direction:column;
	align-items:center;
	justify-content:center;
	width:100%;
	min-height:100vh;
	color:white;
	font-size:110%;
	text-align:center;
	margin-top:50px;
	margin-bottom:50px;

	p{
		margin:10px;
	}
	animation:AbboutfadeIn 2s;
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
	p{
		margin:10px;
	}
	h2{
		color:rgba(0,192,255,.7)
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
		max-width:430px;
		max-height:520px;
	}
`;

export const AbboutButton=styled(ButtonWithOutBorder)`
	width:70px;	
`;

export const AbboutLink=styled(Link)`
	
`;
