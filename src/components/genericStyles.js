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
	h3{
		font-size:70px;
		color:transparent;
		-webkit-text-stroke: 2px rgb(0,191,255);

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
export const LinkWithOutBorder=styled.a`
	color:white;
	cursor:pointer;
	outline: thin dotted;
    outline: 0px auto -webkit-focus-ring-color;
    outline-offset: 0px;
    background-color:transparent;
	border:none;
`;

export const Link=styled.a`
	text-decoration:none;
	color:rgba(0,191,255,.8);
`;