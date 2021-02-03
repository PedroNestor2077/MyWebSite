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
	background-color:gray;
	width:49%;
	height:50%;
	min-width:450px;
	min-height:520px;
	max-width:646px;
	border:solid 1px red;
	h1{color:red;}
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