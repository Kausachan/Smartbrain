import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit, input}) =>{
	return(
		<div>
			<p className = 'f3'>
				{'Paste Image Link To Detect Faces'}
			</p>
			<div className = "center">
				<div className = "form center pa4 br3 shadow-5">
					<input value = {input} className = "f4 pa2 w-70 center" type = "text" onChange = {onInputChange}/>
					<button onClick = {onButtonSubmit} className = "center w-30 grow f4 link ph3 ph3 pv2 dib white bg-light-purple">Detect</button>
				</div>
			</div>
		</div>
		)
}

export default ImageLinkForm;