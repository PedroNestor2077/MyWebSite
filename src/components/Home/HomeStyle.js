import styled from "styled-components"
/* HOME styles file*/


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
	WIDTH:auto;
	margin-bottom:10%;
`;
export const Title=styled.span`
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
	animation:example 18s infinite linear;
	@keyframes example {
	  from {-webkit-transform: rotate(0deg)}
	  to {-webkit-transform: rotate(360deg)}
	}
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

export const ScrollDownButton=styled.button`
	position:absolute;
	bottom:00px;
	outline: thin dotted;
    outline: 0px auto -webkit-focus-ring-color;
    outline-offset: 0px;
    background-color:transparent;
    width:60px;
    border-radius:5px;
    color:white;
    cursor:pointer;
    border:none;
    animation:downButtonAnimation 1s infinite;
    animation-direction:alternate;
	@keyframes downButtonAnimation{
		from{
			bottom:0px;
			color:rgb(0,191,255);
		}
		to{
			color:white;
			bottom:30px;
		}
	} 
`;
