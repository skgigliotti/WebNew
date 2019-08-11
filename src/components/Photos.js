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


const Photos = () => {
  return (
    <div className="Page-all">
    <div className="Photos">
      <img src={roses}/>
      <img src={getty}/>
      <img src={sunset}/>

      <img src={kandinsky}/>
      <img src={flamenco}/>
      <img src={fascination}/>

      <img src={concentration}/>
      <img src={home}/>
      <img src={face}/>

      <img src={dante}/>
      <img src={centro}/>
      <img src={dandy}/>
    </div>
    </div>
  );
}
export default Photos
