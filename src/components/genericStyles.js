import styled from 'styled-components'

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

export const ButtonWithOutBorder=styled.div`
	color:white;
	cursor:pointer;
	outline: thin dotted;
    outline: 0px auto -webkit-focus-ring-color;
    outline-offset: 0px;
    background-color:transparent;
	border:none;
`;