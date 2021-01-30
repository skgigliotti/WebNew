import React from 'react';
import firebase from '../base.js';
import PhotoDisplay from './PhotoDisplay.js'



require('dotenv').config();

const photos = ['getty', 'sunset', 'flamenco', 'fascination',
  'saginaw', 'vine', 'hacking', 'sierra', 'elcentro', 'met', 'pom', 'corgui', 'flor', 'boston', 'home', 'hda',
  'ba', 'patio', 'puebla', 'sanmig', 'classmx', 'cruz', 'wall', 'leon', 'doggo', 'red', 'icecream', 'bridge'];

const graphics = ['roses', 'kandinsky',
  'vincent2', 'rmw', 'face2', 'dante_city',
  'dandy'];


function handleClick(e) {
}


class Photos extends React.Component {

  constructor() {
    super();
    this.state = {

      photos: [],
      graphics: [],
      ready: false

    }
  }

  getInitialState() {
    return {
      ready: false
    }
  }

  componentDidMount() {

    var storage = firebase.storage();
    photos.map((p) => ((storage.ref('gallery/' + p + '.jpg')).getDownloadURL().then((url) =>
      this.state.photos.push(url)
    ).catch(function (error) {
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
    }).then(() => this.setState({ ready: true }))))

    graphics.map((p) => ((storage.ref('gallery/' + p + '.jpg')).getDownloadURL().then((url) =>
      this.state.graphics.push(url)
    ).catch(function (error) {
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
    }).then(() => this.setState({ ready: true }))))


  }

  render() {
    if (this.state.photos != null && this.state.graphics != null) {
      return (
        <div>
          <PhotoDisplay images={this.state.photos} />
          <PhotoDisplay images={this.state.graphics} />
        </div>
      )
    } else {
      return null;
    }
  }


}
export default Photos
