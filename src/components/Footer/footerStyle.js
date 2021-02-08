import styled from 'styled-components'
import {ButtonWithOutBorder} from "../genericStyles"


export const FooterS=styled.div`
	display:flex;
	justify-content:center;
	align-items:center;
	background-color:rgba(0,0,0,.97);
	width:100%;
	height:80px;
	color:white;
	text-align:center;
`;

export const UpButton=styled(ButtonWithOutBorder)`
	position:relative;
	animation:UpButtonAnimation 1s infinite;
	animation-direction:alternate;
`;