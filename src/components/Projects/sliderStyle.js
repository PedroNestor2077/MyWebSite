import styled from "styled-components"


export const SliderS=styled.div`
	display:flex;
	flex-direction:column;
	justify-content:center;
	align-items:center;
	background-color:gray;
	width:${props => `${props.Xsize}vw`};
	height:${props => `${props.Ysize}vh`};
	div{
		width:100%;
		height:100%;
	}
	
`;

export const Switcher=styled.button`
	width:30px;
	outline: thin dotted;
    outline: 0px auto -webkit-focus-ring-color;
    outline-offset: 0px;
    border:none;
    cursor:pointer;
    background-color:red;
    align-items:center;
    position:relative;
	
`;
export const Wrapper=styled.div`
	display:flex;
	width:60%;
	overflow-x:auto;
`;