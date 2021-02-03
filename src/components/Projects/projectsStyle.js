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
	align-items:center;
	justify-content:center;
	width:49%;
	height:50%;
	min-width:450px;
	min-height:520px;
	max-width:646px;
	border:solid 1px white;
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
	background-color:gray;
	width:80%
`;