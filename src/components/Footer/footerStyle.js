import styled from 'styled-components'

export const FooterS=styled.div`
	display:flex;
	justify-content:center;
	align-items:center;
	background-color:rgba(0,0,0,.97);
	width:100%;
	height:80px;
	color:white;
	text-align:center;
	p{
		margin:0px;
	}
	button{
		position:relative;
		outline: thin dotted;
	    outline: 0px auto -webkit-focus-ring-color;
	    outline-offset: 0px;
	    border:none;
	    background-color:transparent;
	    color:white;
	    cursor:pointer;
	    animation:UpButtonAnimation 1s infinite;
	    animation-direction:alternate;
	    @keyframes UpButtonAnimation{
	    	from{
	    		top:-20px;
	    		color:rgb(0,191,255)
	    	}
	    	to{
	    		top:10px;

	    	}
	    }
	}

`;