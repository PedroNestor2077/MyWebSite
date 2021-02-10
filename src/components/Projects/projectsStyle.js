import styled from "styled-components"
import {ButtonWithOutBorder,Link} from '../genericStyles'

export const ProjectsS=styled.div`
	display:flex;
	flex-direction:column;
	align-items:center;
	justify-content:center;
	background-color:#111;
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
	max-width:900px;
	height:auto;
	text-align:justify;
	color:white;
	background-color:transparent;
	ul{
		font-family: "Source Code Pro";
		margin-left:30px;
	}
	li{
		color:white;
		margin:5px;
	}
	h2{
		font-family: "Source Code Pro";
		margin:10px;
		font-size:33px;
	}
`;

export const ProjectInfo=styled.div`
	text-align:left;
	background-color:transparent;
	width:80%;
	font-size:18px;
	display:flex;
	flex-direction:column;
`;

export const Wrapper=styled.div`
	background-color:rgba(0,0,0,0);
	margin-top:50px;
	margin-bottom:100px;
	width:100%;
	max-width:900px;
	position:relative;
	overflow-x:hidden;
	#prev{
		left:0px;
	}
	#next{
		right:0px;
	}
	border-bottom:solid 2px rgb(0,191,255);
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
	overflow-x:hidden;
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
	width:300px;
	img{
		border-radius:10px;
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
    transition:all .2s;
    &:hover{
    	color:gray;
    	bottom:2px;
    }
    
`;

export const ProjectLink=styled(Link)`
`;

