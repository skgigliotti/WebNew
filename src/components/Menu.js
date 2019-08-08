import React, { Component } from 'react';
import '../App.css';
import './Components.css';
import { Link } from 'react-router-dom';

function Circle(props){

    return(
      <div className="Circle">
        <span class = "dotM">
          <div className="Label">
            {props.label}
          </div>
        </span>


      </div>
    );

}

class Menu extends Component{
  render(){

    return (
      <div className="CircleBar">
        <Link to="/"><Circle label="Home"/></Link>
        <Link to="/computerScience"><Circle label="Computer Science" on/></Link>
        <Link to="/language"><Circle label="Language"/></Link>
        <Link to="/photos&design"><Circle label="Photos + Design"/></Link>
        <Link to="/resume"><Circle label="Resume"/></Link>
      </div>
    );

  }

}
export default Menu;
