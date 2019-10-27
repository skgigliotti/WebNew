import React from 'react';
import Modal from './Modal.js';
import firebase from '../base.js';
import {storage} from '../base.js';

require('dotenv').config();


function handleClick(e) {
}


class Photos extends React.Component {

  constructor() {
    super();
    this.state = {
      
      images: []
      
    }
  }

  componentDidMount() { 
    storage.ref("gallery/").on("value", ((snapshot) => this.setState({images: snapshot.val()}).catch(error => console.error(error))))
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
