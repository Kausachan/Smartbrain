import React from 'react';
import Tilt from 'react-tilt'
import brainstorm from './brainstorm.png';
import './Logo.css';

const Logo = () =>{
	return(
		<div className = 'ma4 mt0'>
			<Tilt className="Tilt br2 shadow-2" options={{ max : 100 }} style={{ height: 150, width: 150 }} >
 				<div className="Tilt-inner pa4"> <img style={{paddingTop : '5px'}} src={brainstorm} alt = "brain"/> </div>
			</Tilt>
		</div>
		)
}

export default Logo;