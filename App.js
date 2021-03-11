import React,{Component} from 'react';
import Navigation from './components/Navigation';
import './App.css';
import Logo from './components/Logo';
import ImageLinkForm from './components/ImageLinkForm';
import Rank from './Rank';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import StarRating from './star rating/StarRating';
import './components/Recognition.css';
import Recognition from './components/Recognition';

const app = new Clarifai.App({apiKey : 'a2ba9fa520d54d5597d1d681538c3a9f'});

const particlesOptions = {
                  particles: {
                  number: {
                    value : 85,
                    density: {
                      enable: true,
                      value_area : 800
                    }
                  }
                },
              }

class App extends Component{
  constructor(){
    super();
    this.state = {
      input : '',
      imageUrl : '',                                                        
      box : {}
    }
  }  

  calculateFaceLocation = (data) => {
   const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
   const image = document.getElementById('image');
   const width = Number(image.width);
   const height = Number(image.height);
   console.log(width, height, clarifaiFace);
   return {
    // Math incoming
    leftCol : clarifaiFace.left_col * width,
    topRow : clarifaiFace.top_row *height,
    rightCol : width - (clarifaiFace.right_col * width),
    bottomRow : height - (clarifaiFace.bottom_row * height)
   }
  }

  displayBox = (box) =>{
    this.setState({box : box})
  }
  onInputChange = (event) =>{
    console.log(event.target.value)
    this.setState({input : event.target.value})
  }

  onButtonSubmit = () =>{
    this.setState({imageUrl : this.state.input}) // Asynchronous
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(response => this.displayBox(this.calculateFaceLocation(response)))
    .catch(err => console.log(err));
    this.setState({input : ''})
  }

  render(){
    return(
      <div className = 'App'>
        <Particles className = "particles" 
        params = {particlesOptions}
        />
        <Navigation/>
        <Logo/>
        <div className = "flex1">
          <div className = "rateus">
            <StarRating totalStars = {"HIkajdbkajb"}/>
            <p style = {{color : "white"}}>Rate us</p>
          </div>
        </div>
        <Rank/>
        <ImageLinkForm input = {this.state.input} onInputChange = {this.onInputChange} onButtonSubmit = {this.onButtonSubmit}/>
        <Recognition imageUrl = {this.state.imageUrl} box = {this.state.box}/>
      </div>
   )
  }
}



export default App;
