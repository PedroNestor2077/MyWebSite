import styled from 'styled-components'
import {LinkWithOutBorder} from "../genericStyles"


export const FooterS=styled.div`
	display:flex;
	justify-content:center;
	align-items:center;
	background-color:#111;
	width:100%;
	height:80px;
	color:white;
	text-align:center;
`;

export const UpButton=styled(LinkWithOutBorder)`
	position:relative;
	animation:UpButtonAnimation 1s infinite;
	animation-direction:alternate;
`;