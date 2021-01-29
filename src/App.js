import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './components/Menu.js';
import Footer from './components/Footer.js';
import Home from './components/Home.js'
import ComputerScience from './components/ComputerScience.js';
import Language from './components/Language.js';
import Photos from './components/Photos.js';
import Wander from './components/Wander.js';
const Spacer = require('react-spacer')





class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="content-wrap">
          <span className="rectangle"></span>
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
        <Footer />
      </div >
    );
  }

}

export default App;
