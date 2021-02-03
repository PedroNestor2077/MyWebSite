import React from 'react'
import {DrummerS,IteniFrame,ItenImgDrummer} from "./abboutStyle.js"

function Drummer(){
	
	return(
		<DrummerS >
			<p>
				<h2>Programador também é gente!</h2>
				<p>Todo mundo merece um hobby,ne?<br/>O meu se chama BATERIA!</p>
			</p>

			<ItenImgDrummer id="img">
				<img src="./images/drummer.png" alt="MyPhoto"></img>
			</ItenImgDrummer>
			<p>
				Atravez da bateria descobri que a amo tocar bateria! <br/>
				Clique <a href="https://www.facebook.com/pedro.nestor.98/videos/1943504902449169">aqui</a> e me veja tocando!
			</p>
		</DrummerS>
	)
};

export default Drummer