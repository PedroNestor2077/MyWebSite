import styled from "styled-components"

export const ProjectsS=styled.div`
	display:flex;
	flex-wrap:wrap;
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
	width:100%;
	height:auto;
	max-width:500px;
	text-align:justify;
	color:white;
	background-color:rgba(255,255,255,.1);
	h1{color:red;}
	img{
		width:320px;
		height:210px;
		border-bottom:solid 2px white;
	}
`;

export const ProjectListS=styled.div`
	display:flex;
	flex-wrap:wrap;
	justify-content:center;
	background-color:transparent;
	width:100%;
	height:100%;
	color:white;
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
	width:80%
`;
export const Wrapper=styled.div`
	display:flex;
	width:90%;
	overflow-x:auto;
	border-radius:5px;
`;

export const ImgSliderS=styled.div`
	background-color:gray;
`;

export const Image=styled.div`
	background-color:blue;
`;

export const SwitcherS=styled.button`
	color:white;
	background-color:transparent;
	border:none;
	cursor:pointer;
	outline: thin dotted;
    outline: 0px auto -webkit-focus-ring-color;
    outline-offset: 0px;
`;
