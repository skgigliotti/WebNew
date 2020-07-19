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
      <h2>Translation</h2>
        <ul>
          <li>Translated poems and short stories by nine different contemporary, published Mexican authors. Collaborated with original authors. Professionally recorded audio of written translation.</li>
          <li>Translated website content for Mesón de San Andrés hotel. </li>
        </ul>
      <h2>Courses</h2>
        <ul>
          <li>Advanced Spanish Language and Grammar</li>
          <li>Latin American Cultures </li>
          <li>Introduction to Hispanic Literature</li>
          <li>The Cradle of Magic Realism</li>
          <li>Don Quijote</li>
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

      <li><span role="img" aria-label="mx">🌎</span>  Meet weekly with international students studying in Santa Barbara.
      Foster genuine friendships, facilitate intercultural dialogue
      and help students with conversational English.</li>

      <li><span role="img" aria-label="mx">🇲🇽</span>  University exchange student in Querétaro, Mexico. Improved grammar and ability to converse fluently in Spanish.
        Learned about Mexican culture and history.</li>

      <li><span role="img" aria-label="sp">🇪🇸</span>  Au pair in Seville, Spain. Taught English to two young girls.

        Learned the joys and challenges of adapting to life in a new country. Made significant progress in Spanish abilities.</li>

        <li><span role="img" aria-label="it">🇮🇹</span>  Learning Italian to connect with my grandparents and
        understand Italian culture.</li>

    </ul>

    </div>
    <div className="Text-background Example">
      <h2>Writing Sample (Spanish)...</h2>
      <h1 style={ {padding: '2vh 2vh 2vh 4vh'}}>Inspiración de Sor Juana Inés de La Cruz</h1>
    <p>{this.state.writing}</p>
    </div>
        </div>
      </div>
    );

  }

}
export default Language
