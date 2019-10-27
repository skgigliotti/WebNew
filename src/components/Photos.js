import React from 'react';
import Modal from './Modal.js';
import firebase from '../base.js';

require('dotenv').config();


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
    ref.listAll().then((res) => {
      this.setState({
        images: res.items})
    })
  }

  componentDidMount() { 
    this.getImages();
   }
  
  render(){
          
    

    return (
      <div className="Page-all">
        
      <div className="Photos">
      {this.state.images.map((p) => (<img src={p} alt={p} onClick={handleClick}/>))}
      </div>
      <Modal />
      </div>
    );
    
  }
  
}
export default Photos
