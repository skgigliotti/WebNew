import React from 'react';
import firebase from '../base.js';

class Language extends React.Component {
  constructor() {
    super();
    this.state = {
      writing: ''
    }
  }

  componentDidMount(){
    const sample = firebase.database().ref('sample');
  sample.on('value', (snapshot) => {
    
    let sampleWriting = snapshot.val();
    this.setState({writing: sampleWriting.sor_juana});
  }
      );
  }
  
  render(){

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
      <li>Literary Translation</li>
      <li>History of Mexico</li>
      <li>Mexican Literature</li>
      <li>Advanced Spanish Conversation</li>
      <li>Engaging and Understanding Cultures</li>
      <li>Latin Dance</li>
    </ul>
    </div>
    <div className="Text-background">
      <h2>Cross Cultural Engagement</h2>
    <ul>
      <li>Currently studying abroad in Mexico. Improving ability to converse fluently in Spanish. 
        Learning about Mexican culture.</li>
      <li>Weekly volunteer working with international students in Santa Barbara.
      Facilitate intercultural dialogue
      and help international students with conversational English.</li>
    
      <li>Au pair in Seville, Spain. Taught English to two young girls.
        
        Improved my ability to communicate in Spanish.</li>
  
    </ul>
      
    </div>
    <div className="Text-background Example">
      <h2>Por ejemplo...</h2>
      <h1 style={ {padding: '2vh 2vh 2vh 4vh'}}>En caunto a Sor Juana Inés de La Cruz</h1>
    <p>{this.state.writing}</p>
    </div>
        </div>
      </div>
    );

  }
  
}
export default Language
