import React from 'react';
import firebase from '../base.js';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

class Language extends React.Component {
  constructor() {
    super();
    this.state = {
      writing: ''
    }
  }

  componentDidMount() {

  }

  render() {

    return (
      <div className="Page-all">
        <div className="Language">

          <div className="Text-background">
            <h2>Translation</h2>
            <ul class="SG">
              <Card class="sgLi"><Typography>📖</Typography><Typography>Translated poems and short stories by nine different contemporary, published Mexican authors. Collaborated with original authors. Professionally recorded audio of written translation.</Typography></Card>
              <Card class="sgLi"> <Typography>💻</Typography><Typography>Translated website content for Mesón de San Andrés hotel.</Typography> </Card>
            </ul>
            <h2>Courses</h2>
            <ul class="SG">
              <Card class="sgLi"><Typography>Advanced Spanish Language and Grammar</Typography></Card>
              <Card class="sgLi"><Typography>Latin American Cultures</Typography></Card>
              <Card class="sgLi"><Typography>Introduction to Hispanic Literature</Typography></Card>
              <Card class="sgLi"><Typography>The Cradle of Magic Realism</Typography></Card>
              <Card class="sgLi"><Typography>Don Quijote</Typography></Card>
              <Card class="sgLi"><Typography>Literary Translation</Typography></Card>
              <Card class="sgLi"><Typography>History of Mexico</Typography></Card>
              <Card class="sgLi"><Typography>Mexican Literature</Typography></Card>
              <Card class="sgLi"><Typography>Advanced Spanish Conversation</Typography></Card>
              <Card class="sgLi"><Typography>Engaging and Understanding Cultures</Typography></Card>
              <Card class="sgLi"><Typography>Beginning Japanese 1</Typography></Card>
              <Card class="sgLi"><Typography>Beginning Japanese 2</Typography></Card>
              <Card class="sgLi"><Typography>Intermediate Japanese 1</Typography></Card>
              <Card class="sgLi"><Typography>Intermediate Japanese 2</Typography></Card>
            </ul>
          </div>
          <div className="Text-background">
            <h2>Cross Cultural Engagement</h2>
            <ul class="SG">
              <Card class="sgLi">
                <Typography>🌎</Typography>  <Typography>Meet weekly with international students studying in Santa Barbara.
                  Foster genuine friendships, facilitate intercultural dialogue
                  and help students with conversational English.</Typography>
              </Card>
              <Card class="sgLi">
                <Typography>🇲🇽</Typography>  <Typography>University exchange student in Querétaro, Mexico. Improved grammar and ability to converse fluently in Spanish.</Typography>
              </Card>
              <Card class="sgLi">
                <Typography>🇪🇸</Typography>  <Typography>Au pair in Seville, Spain. Taught English to two young girls. Learned to put Spanish in context and navigate life a new culture.</Typography>
              </Card>
              <Card class="sgLi">
                <Typography>🇯🇵</Typography>  <Typography>Student of Japanese at SBCC. Able to read hiragana and katakana and continuing to learn more kanji. Learn about Japanese culture and customs.</Typography>
              </Card>
              <Card class="sgLi">
                <Typography>🇮🇹</Typography>  <Typography>Learning Italian to connect with my grandparents and understand my family's Italian culture.</Typography>
              </Card>
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