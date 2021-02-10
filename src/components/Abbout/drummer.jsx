import React from 'react'
import {DrummerS,ItenImgDrummer,AbboutLink} from "./abboutStyle.js"

function Drummer(){
	
	return(
		<DrummerS >
			<p>
				<h2>Programador também é gente!</h2>
				<p>Todo mundo merece um hobby,ne?<br/>O meu se chama <AbboutLink id="drum">BATERIA</AbboutLink></p>
			</p>

			<ItenImgDrummer id="img">
				<img src="./images/drummer.png" alt="MyPhoto"></img>
			</ItenImgDrummer>
			<p>
				Atravez da música descobri que a amo tocar bateria! <br/>
				Clique <AbboutLink href="https://www.facebook.com/pedro.nestor.98/videos/1943504902449169" target="_blank">aqui</AbboutLink> e me veja tocando!
			</p>
		</DrummerS>
	)
};

export default Drummer