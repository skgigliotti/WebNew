import React from 'react';
import Modal from './Modal.js';
import Lightbox from 'react-lightbox-component';


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
import met from '../photos/met.jpg';

const photos = [roses, getty, sunset, kandinsky, flamenco, fascination,
  concentration, saginaw, face, boston, centro, met, dante, home, dandy];



function handleClick(e) {
}

function Photos  () {

  
  
  return (
    <div className="Page-all">
      
    <div className="Photos">
    {photos.map((p) => (<img src={p} alt={p} onClick={handleClick}/>))}
    </div>
    <Modal />
    </div>
  );
}
export default Photos
