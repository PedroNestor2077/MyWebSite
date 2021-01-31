import styled from "styled-components"
/* HOME styles file*/


export const HomeS=styled.div`
	display:flex;
	align-items:center;
	justify-content:center;
	background-color:transparent;
	height:100vh;
`;		
export const HomeContainer=styled.div`
	display:flex;
	margin-right:30%;
	flex-direction:column;
	justify-content:flex-start;
`;
export const Title=styled.span`
	display:flex;
	align-items:center;
	background-color:transparent;
	width:auto;
	height:50px;
	font-size:25px;
	color:white;
	font-family:sans-serif;
	
`;
export const CodeIcon=styled.span`
	margin-right:20px;
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
	font-size:20px;
	h3{
		margin:10px;
	}
	/*JS ANIMATION PLUGGIN*/
	.ml11 {
		height:30px;
		display:flex;
		font-size:30px;
	}

	.ml11 .text-wrapper {
	  position: relative;
	  left:8px;
	  bottom:20px;
	  width:100%;
	  display: inline-block;
	  
	}

	.ml11 .line {
	  opacity: 0;
	  position: absolute;
	  left: 0;
	  height: 100%;
	  width: 3px;
	  background-color: #fff;
	  transform-origin: 0 50%;
	}

	.ml11 .line1 { 
	  top: 0; 
	  left: 0;
	}

	.ml11 .letter {
	  display: inline-block;
	  line-height: 1em;
	}
`;

