import styled from "styled-components"
import {ButtonWithOutBorder} from "../genericStyles.js"
export const HomeS=styled.div`
	display:flex;
	align-items:center;
	justify-content:center;
	background-color:transparent;
	height:100%;
	min-height:100%;
`;	

export const HomeContainer=styled.div`
	display:flex;
	flex-direction:column;
	justify-content:center;
	width:auto;
`;

export const HomeTitle=styled.span`
	display:flex;
	align-items:center;
	background-color:transparent;
	width:auto;
	height:50px;
	font-size:110%;
	color:white;
	font-family:sans-serif;
`;

export const CodeIcon=styled.span`
	margin-right:5px;
	background-color:transparent;
	width:40px;
	height:40px;
	color:rgba(0,191,255);
	animation:Rotate 10s infinite linear;	
`;

export const Text=styled.div`
	font-family: "Source Code Pro";
	color:rgba(0,191,255,.9);
	display:flex;
	flex-direction:column;
	justify-content:flex-start;
	align-items:flex-start;
	font-size:14px;
	h3{
		margin-top:20px;
		margin-bottom:20px;
	};
	span{
		margin-top:5px;
		display:flex;
		justify-content:flex-start;
		align-items:flex-end;
	}
	#AnimattedText{
		font-size:100%;
		font-family: "SANS-SERIF";
	}
`;

export const ScrollDownButton=styled(ButtonWithOutBorder)`
	position:absolute;
    width:60px;
    animation:downButtonAnimation 1s infinite ease-out;
    animation-direction:alternate;
`;
