import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Menu from './components/Menu.js';

import Home from './components/Home.js'
import ComputerScience from './components/ComputerScience.js';
import Language from './components/Language.js';
import Photos from './components/Photos.js';
import Wander from './components/Wander.js';

function App() {
  return (
    <BrowserRouter>
      
        <div>
          <Menu/>
          </div>
          <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/computerScience" component={ComputerScience} />
          <Route path="/language" component={Language} />
          <Route path="/photos&design" component={Photos} />
          <Route path="/wander" component={Wander} />
        
      </div>
    </BrowserRouter>
  );
}

export default App;
