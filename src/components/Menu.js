import React, { Component } from 'react';
import '../App.css';
import './Components.css';
import { Link } from 'react-router-dom';

function NavItem(props) {

  return (
    <div className="Circle">
      <span className="dotM">
        <div className="Label">
          {props.label}
        </div>
      </span>


    </div>
  );

}

class Menu extends Component {
  render() {

    return (
      <div className="CircleBar">
        <Link to="/"><NavItem label="Home" /></Link>
        <Link to="/computer-science"><NavItem label="Computer Science" on /></Link>
        <Link to="/language"><NavItem label="Language" /></Link>
        <Link to="/photos-and-design"><NavItem label="Photos + Design" /></Link>
      </div>
    );

  }

}
export default Menu;
