import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './components/Menu.js';
import Home from './components/Home.js'
import ComputerScience from './components/ComputerScience.js';
import Language from './components/Language.js';
import Photos from './components/Photos.js';
import Wander from './components/Wander.js';
import { SocialIcon } from 'react-social-icons';
const Spacer = require('react-spacer')





class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="rectangle">
          <BrowserRouter>
            <div className="Title">
              Sophia Gigliotti
            </div>
            <div>
              <Menu />

            </div>
            <div className="App">
              <Route exact path="/" component={Home} />
              <Route path="/computerScience" component={ComputerScience} />
              <Route path="/language" component={Language} />
              <Route path="/photos&design" component={Photos} />
              <Route path="/wander" component={Wander} />
            </div>
          </BrowserRouter>
        </div>
        <div className="icons">
          <SocialIcon url="https://www.linkedin.com/in/sophia-gigliotti/" bgColor="#bbb" />
          <SocialIcon url="https://github.com/skgigliotti" bgColor="#bbb" />
          <SocialIcon url="http://twitter.com/sophtwaredev" bgColor="#bbb" />
        </div>
      </div >
    );
  }

}

export default App;
