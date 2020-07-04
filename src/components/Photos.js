import React from 'react';
import Modal from './Modal.js';
import firebase from '../base.js';
import PhotoDisplay from './PhotoDisplay.js'



require('dotenv').config();

const photos = ['roses', 'getty', 'sunset', 'kandinsky', 'flamenco', 'fascination',
  'vincent2', 'saginaw', 'face2', 'vine', 'hacking', 'sierra', 'elcentro', 'met', 'pom', 'corgui', 'flor', 'boston', 'dante_city', 'home', 'hda',
  'ba','patio','puebla','sanmig','classmx','cruz','dandy','transmission_media'];



function handleClick(e) {
}


class Photos extends React.Component {

  constructor() {
    super();
    this.state = {

      images: [],
      ready: false

    }
  }

  getInitialState() {
    return {
      ready: false
    }
  }

  componentDidMount() {

      console.log('state im' , this.state.ready);
      var storage = firebase.storage();
      photos.map((p) => ((storage.ref('gallery/' + p + '.jpg')).getDownloadURL().then((url) =>
        this.state.images.push(url)
      ).catch(function(error) {
        console.log(error)
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case 'storage/object-not-found':
            // File doesn't exist
            break;

          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break;

          case 'storage/canceled':
            // User canceled the upload
            break;

          case 'storage/unknown':
            // Unknown error occurred, inspect the server response
            break;
        }
      }).then(() => this.setState({ready: true}))))


     }

  render() {
    if ( this.state.images != null ) {
      return (
        <PhotoDisplay images={this.state.images} />
      )
    } else {
      return null;
    }
  }


}
export default Photos
