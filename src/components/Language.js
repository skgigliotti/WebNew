import React from 'react';
import firebase from '../base.js';

const Language = () => {
  var writing = '';
  const sample = firebase.database().ref('sample');
  sample.on('value', (snapshot) => {
    console.log(sample);
    let sampleWriting = snapshot.val();
    console.log(sampleWriting.sor_juana);
    writing = sampleWriting.sor_juana;
    console.log(writing);
  }
      );
  return (
    <div className="Page-all">
      <h1>Language</h1>
      <div className="Language">
        <div className="Text-background">
        <h2>Courses</h2>
      <ul>
    <li>Advanced Spanish Language and Grammar</li>
    <li>Latin American Cultures </li>
    <li>Introduction to Hispanic Literature</li>
    <li>The Cradle of Magic Realism</li>
  </ul>
  </div>
  <div className="Text-background">
    <h2>Cross Cultural Engagement</h2>
  <ul>
    <li>Weekly volunteer working with international students in Santa Barbara.
    Facilitate intercultural dialogue
    and help international students with conversational English.</li>
  
    <li>Au pair in Seville, Spain. Taught English to two young girls.
      
      Improved my ability to communicate in Spanish.</li>

  </ul>
    
  </div>
  <div className="Text-background Example">
    <h2>Por ejemplo...</h2>
  <p>{writing}</p>
  </div>
      </div>
    </div>
  );
}
export default Language
