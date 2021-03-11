import React,{Component} from 'react';
import Stars from './Stars';

const totalStars = 5;

class StarRating extends Component{
	constructor(){
		super()
		this.state = {
			selectedStars : 0,
		}
	}

	starClick(value){
		this.setState({selectedStars : value})
		//alert(`thanks for rating us ${value} stars out of 5`)
	}
	render(){
		return(
			<div>
				{
					[...Array(totalStars)].map((n, i) =>
						<Stars
							key = {i}
							selected = {i < (this.state.selectedStars)}
							click = {() => this.starClick(i+1)}
						/>
						)
				}
			</div>
			)
	}
}

export default StarRating;