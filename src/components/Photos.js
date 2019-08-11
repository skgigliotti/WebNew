import React from 'react';
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

const photos = [roses, getty, sunset, kandinsky, flamenco, fascination,
  concentration, home, face, dante, centro, dandy];

function handleClick(e) {
  
}

const Photos = () => {
  
  return (
    <div className="Page-all">
    <div className="Photos">
    {photos.map((p) => (<img src={p} alt={p} onClick={handleClick}/>))}
    </div>
    </div>
  );
}
export default Photos
