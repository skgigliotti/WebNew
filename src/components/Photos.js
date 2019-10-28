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
      
      images: [],
      urls: []
      
    }
    this.getImages = this.getImages.bind(this); 
  }
  getImages(){

    // Get a database reference to our posts
    var db = firebase.storage();
    var ref = db.ref("/gallery");

    // Attach an asynchronous callback to read the data at our posts reference
    ref.FullMetadata.prototype.downloadURLs.then((res) => {
      console.log(res)
      {
        this.setState({urls:res})
      }
      
    })
    
  }

  componentDidMount() { 
    this.getImages();
    
   }
  
  render(){
          
    

    return (
      <div className="Page-all">
        
      <div className="Photos">
      {this.state.urls.map((p) => (<img src={p} alt={p} onClick={handleClick}/>))}
      </div>
      
      <Modal />
      </div>
    );
    
  }
  
}
export default Photos
