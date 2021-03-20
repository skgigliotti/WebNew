import React from 'react';
import firebase from '../base.js';

class Language extends React.Component {
  constructor() {
    super();
    this.state = {
      writing: ''
    }
  }

  componentDidMount() {
    const sample = firebase.database().ref('sample');
    sample.on('value', (snapshot) => {

      let sampleWriting = snapshot.val();
      this.setState({ writing: sampleWriting.sor_juana });
    }
    );
  }

  render() {

    return (
      <div className="Page-all">
        <h1>Language</h1>
        <div className="Language">

          <div className="Text-background">
            <h2>Translation</h2>
            <ul class="SG">
              <li class="sgLi"> 📖  Translated poems and short stories by nine different contemporary, published Mexican authors. Collaborated with original authors. Professionally recorded audio of written translation.</li>
              <li class="sgLi"> 💻  Translated website content for Mesón de San Andrés hotel. </li>
            </ul>
            <h2>Courses</h2>
            <ul class="SG">
              <li class="sgLi">Advanced Spanish Language and Grammar</li>
              <li class="sgLi"> Latin American Cultures </li>
              <li class="sgLi">Introduction to Hispanic Literature</li>
              <li class="sgLi">The Cradle of Magic Realism</li>
              <li class="sgLi">Don Quijote</li>
              <li class="sgLi">Literary Translation</li>
              <li class="sgLi">History of Mexico</li>
              <li class="sgLi">Mexican Literature</li>
              <li class="sgLi">Advanced Spanish Conversation</li>
              <li class="sgLi">Engaging and Understanding Cultures</li>
              <li class="sgLi">Beginning Japanese 1</li>
              <li class="sgLi">Beginning Japanese 2</li>
            </ul>
          </div>
          <div className="Text-background">
            <h2>Cross Cultural Engagement</h2>
            <ul class="SG">
              <li class="sgLi">
                🌎  Meet weekly with international students studying in Santa Barbara.
                Foster genuine friendships, facilitate intercultural dialogue
                and help students with conversational English.
              </li>
              <li class="sgLi">
                🇲🇽  University exchange student in Querétaro, Mexico. Improved grammar and ability to converse fluently in Spanish.
              </li>
              <li class="sgLi">
                🇪🇸  Au pair in Seville, Spain. Taught English to two young girls. Learned to put Spanish in context and navigate life a new culture.
              </li>
              <li class="sgLi">
                🇯🇵  Student of Japanese at SBCC. Able to read hiragana and katakana and continuing to learn more kanji. Learn about Japanese culture and customs.
              </li>
              <li class="sgLi">
                🇮🇹  Learning Italian to connect with my grandparents and understand my family's Italian culture.
              </li>
            </ul>

          </div>
          {/* <div className="Text-background Example">
            <h2>Writing Sample (Spanish)...</h2>

            <ul class="SG">
              <li class="sgLi">
                <h2 style={{ padding: '2vh 2vh 2vh 4vh' }}>Inspiración de Sor Juana Inés de La Cruz</h2>
                ✏️  {this.state.writing}
              </li>

            </ul>

          </div> */}
        </div>
      </div>
    );

  }

}
export default Language