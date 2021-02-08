import styled from "styled-components"
import {ButtonWithOutBorder} from '../genericStyles'
export const ProjectsS=styled.div`
	display:flex;
	flex-direction:column;
	align-items:center;
	justify-content:center;
	background-color:rgba(0,0,10,.98);
	width:100%;
	height:auto;
`;

export const ProjectBoxS=styled.div`
	display:flex;
	flex-direction:column;
	flex-shrink:0;
	align-items:center;
	justify-content:center;
	width:100vw;
	max-width:800px;
	height:auto;
	text-align:justify;
	color:white;
	background-color:rgba(255,255,255,.1);	
`;

export const ProjectInfo=styled.div`
	text-align:left;
	background-color:transparent;
	width:80%;
	font-size:15px;
	display:flex;
	flex-direction:column;
`;

export const Wrapper=styled.div`
	width:100%;
	max-width:800px;
	position:relative;
	border-radius:5px;
	overflow-x:hidden;
	#prev{
		left:0px;
	}
	#next{
		right:0px;
	}
`;

export const ProjectList=styled.div`
	width:auto;
	display:flex;
	justify-content:flex-start;
	margin-left:${props=>`${props.margin}px`};
	transition:all ease .4s;
`;

export const ImgSliderS=styled.div`
	background-color:transparent;
	display:flex;
	flex-direction:column;
	align-items:center;
	justify-content:center;
	.MuiFormGroup-root{
		flex-direction:row;
		color:white;
	}
	.MuiSvgIcon-root{
		color:white;
	}
`;

export const Image=styled.div`
	background-color:transparent;
	overflow-x:hidden;
	width:300px;
	img{
		width:300px;
		min-width:300px;
	}
`;

export const HandleButton=styled(ButtonWithOutBorder)`
	display:flex;
	align-items:center;
	position:absolute;
    width:60px;
    height:100%;
`;

