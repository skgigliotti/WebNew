import React from 'react';
import Modal from './Modal.js';
import firebase from '../base.js';

require('dotenv').config();

const photos = ['roses', 'getty', 'sunset', 'kandinsky', 'flamenco', 'fascination',
  'vincent2', 'saginaw', 'face2', 'sierra', 'elcentro', 'met', 'pom', 'corgui', 'flor', 'boston', 'dante_city', 'home', 'dandy'];



function handleClick(e) {
}


class Photos extends React.Component {

  constructor() {
    super();
    this.state = {
      
      images: []
      
    }
    this.getImages = this.getImages.bind(this);
  }
    getImages(){

      // Get a database reference to our posts
      var db = firebase.storage();
      var ref = db.ref("/gallery");
  
      // Attach an asynchronous callback to read the data at our posts reference
      ref.then((res) => {
        console.log(res)
        ref.map((p) => (p.child(photos[p]).getDownloadURL().then(url => {
          this.state.urls.push(url)})))
      })
  
    }
  
    componentDidMount() { 
      this.getImages();
     }

  
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
