import React from 'react';
import Modal from './Modal.js';


import roses from '../photos/roses.jpg';
import concentration from '../photos/vincent2.jpg';
import sunset from '../photos/sunset.jpg';
import fascination from '../photos/fascination.jpg';
import flamenco from '../photos/flamenco.jpg';
import getty from '../photos/getty.jpg';
import kandinsky from '../photos/kandinsky.jpg';
import home from '../photos/home.jpg';
import face from '../photos/face2.jpg';
import dandy from '../photos/dandy.jpg';
import dante from '../photos/dante_city.jpg';
import centro from '../photos/elcentro.jpg';
import saginaw from '../photos/saginaw.jpg';
import boston from '../photos/boston.jpg';
import sierra from '../photos/sierra.jpg';
import met from '../photos/met.jpg';
import self from '../photos/selfport.jpg';
import pom from '../photos/pom.jpg';
import corgui from '../photos/corgui.jpg';
import flor from '../photos/flor.jpg';

const photos = [roses, getty, sunset, kandinsky, flamenco, fascination,
  concentration, saginaw, face, sierra, centro, met, pom, corgui, flor, boston, dante, home, self, dandy];



function handleClick(e) {
}

class Photos extends React.Component {

  
  render(){
    
    return (
      <div className="Page-all">
        
      <div className="Photos">
      {photos.map((p) => (<img src={p} alt={p} onClick={handleClick}/>))}
      </div>
      <Modal />
      </div>
    );
    
  }
  
}
export default Photos
