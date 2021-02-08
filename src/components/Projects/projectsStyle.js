import styled from "styled-components"

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

export const Title=styled.div`
	margin-top:50px;
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

export const ProjectInfo=styled.div`
	text-align:left;
	background-color:transparent;
	width:80%;
	font-size:15px;
	display:flex;
	flex-direction:column;
	@media(max-width:800px){
		width:100%;

	}
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
	transition:all ease .5s;
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
	} ''
	.MuiSvgIcon-root{
		color:white;
	}
	
`;

export const Image=styled.div`
	background-color:transparent;
	img{
		width:300px;
		min-width:300px;
	}

`;

export const HandleButton=styled.button`
	background-color:transparent;
	position:absolute;
	outline: thin dotted;
    outline: 0px auto -webkit-focus-ring-color;
    outline-offset: 0px;
    background-color:transparent;
    width:60px;
    border-radius:5px;
    color:red;
    cursor:pointer;
    border:none;
    height:100%;
`;

