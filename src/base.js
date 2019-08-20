
import firebase from 'firebase';
import config from './.fbConfig.js'

  // Initialize Firebase
  firebase.initializeApp(config);

  const storage = firebase.storage();

  export {
    storage,
    firebase as default
  }

