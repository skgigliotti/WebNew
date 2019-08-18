
import firebase from 'firebase';
import withFirebaseAuth from 'react-with-firebase-auth';
import config from './.fbConfig.js'

  // Initialize Firebase
  firebase.initializeApp(config);

  const storage = firebase.storage();

  export {
    storage,
    firebase as default
  }

