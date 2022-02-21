import React from 'react';
import firebase from '../base.js';
import PhotoDisplay from './PhotoDisplay.js'

require('dotenv').config();

const photos = ['getty', 'sunset', 'flamenco',
  'saginaw', 'vine', 'hacking', 'sierra', 'elcentro', 'met', 'pom', 'corgui', 'boston', 'home', 'hda',
  'ba', 'patio', 'puebla', 'sanmig', 'classmx', 'cruz', 'wall', 'leon', 'doggo', 'red', 'icecream', 'bridge', 'golden_soap', 'fire', 'beach_xmas',
  'sunflowers', 'running', 'cam', 'cherry', 'boscom', 'bici', 'moth'];

const portraits = ['trav_pink',
  'fence_trav', 'flower_chena', 'side_trav', 'fascination',
  'tree_chena', 'leaves_ben', 'court_ben', 'rebeca'];

const v_portraits = ['shoe_trav',
  'shadow_bro'];

const graphics = ['roses', 'kandinsky',
  'vincent2', 'face2', 'dante_city', 'ghosts',
];

const v_graphics = [
  'dandy', 'rage'];


function handleClick(e) {
}


class Photos extends React.Component {

  constructor() {
    super();
    this.state = {
      photos: [],
      portraits: [],
      v_portraits: [],
      v_graphics: [],
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

    portraits.map((p) => ((storage.ref('gallery/' + p + '.jpg')).getDownloadURL().then((url) =>
      this.state.portraits.push(url)
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

    v_portraits.map((p) => ((storage.ref('gallery/' + p + '.jpg')).getDownloadURL().then((url) =>
      this.state.v_portraits.push(url)
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

    v_graphics.map((p) => ((storage.ref('gallery/' + p + '.jpg')).getDownloadURL().then((url) =>
      this.state.v_graphics.push(url)
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
          <PhotoDisplay images={this.state.portraits} />
          <PhotoDisplay images={this.state.v_portraits} />
          <PhotoDisplay images={this.state.graphics} />
          <PhotoDisplay images={this.state.v_graphics} />
        </div>
      )
    } else {
      return null;
    }
  }


}
export default Photos