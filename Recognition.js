import React from 'react';
import './Recognition.css';

const Recognition = ({imageUrl, box}) =>{
	return(
		<div className = 'center ma flex'>
			<div className = "absolute mt2">
				<img id = "image" alt = "" src = {imageUrl}  className = "box shadow-3"/>
				<div className = "bounding_box" style = {{top : box.topRow, right : box.rightCol, bottom : box.bottomRow, left : box.leftCol}}></div>
			</div>
		</div>

		)
}

export default Recognition;