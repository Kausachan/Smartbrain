import React from 'react';
import './Stars.css';

const Stars = ({selected = false, click}) =>{
	return(
		<div className = {(selected) ? "star selected" : "star"} onClick = {click}>
		</div>
		)
}

export default Stars;