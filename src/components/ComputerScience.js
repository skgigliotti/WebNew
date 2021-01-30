import React from 'react';

const ComputerScience = () => {
  return (
    <div className="Page-all">
      <h1>Computer Science</h1>
      <div className="Computer-science">
        <div className="Cs-projects Text-background">
          <h2>Projects</h2>
          <ul class="SG">
            <li class="sgLi">📎   <a href="https://westmont-ministries-outreach.herokuapp.com/" target="_blank">  Student Outreach Database (PSQL/PHP/HTML)</a> - used for Westmont College ministry teams to monitor participation</li>
            <li class="sgLi">🌲  <a href="https://devpost.com/software/sbtrax-v486h7" target="_blank">  SB Trax </a> - an Android app that provides helpful information about hiking in Santa Barbara and includes interactive safety features</li>
            <li class="sgLi">🏃  Wellness Running Log  (Java/MySQL) - built an application to track runs and measure physical and mental wellness</li>
          </ul>
        </div>
        <div className="Text-background">
          <h2>Experience</h2>
          <ul class="SG">
            <li class="sgLi">🖥️   Web Development</li>
            <li class="sgLi">☁️   Salesforce Development</li>
            <li class="sgLi">🗄️  Database Design</li>
          </ul>
        </div>

        <div className="Courses Text-background">
          <h2>Courses</h2>
          <ul class="SG">
            <li class="sgLi">Introduction to Computer Science</li>
            <li class="sgLi">Discrete Mathematics</li>
            <li class="sgLi">Abstract Models for Concrete Problems in Java</li>
            <li class="sgLi">Linear Algebra</li>
            <li class="sgLi">Software Development</li>
            <li class="sgLi">3D Computer Graphics</li>
            <li class="sgLi">Multivariable Calculus</li>
            <li class="sgLi">Subdivision Methods</li>
            <li class="sgLi">Database Design</li>
            <li class="sgLi">Space, Time, and Perfect Algorithms</li>
            <li class="sgLi">Codes and Encryption</li>
            <li class="sgLi">Probability and Statistics</li>
            <li class="sgLi">Computer Architecture and Hardware</li>
            <li class="sgLi">Networks</li>
            <li class="sgLi">Artificial Intelligence</li>
            <li class="sgLi">Formal Languages & Automata</li>
          </ul>
        </div>
      </div>

    </div>
  );
}
export default ComputerScience