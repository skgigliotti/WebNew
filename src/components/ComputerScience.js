import React from 'react';

const ComputerScience = () => {
  return (
    <div className="Computer-science-all">
    <h1>Computer Science</h1>
    <div className="Computer-science">
      <div className="Cs-projects Text-background">
         <ul>
           <li><a href="https://gentle-woodland-96355.herokuapp.com/" target="_blank">Student Outreach Database (PSQL/PHP/HTML)</a> - used for Westmont College ministry teams to monitor participation</li>
           <li><a href="https://devpost.com/software/sbtrax-v486h7" target="_blank">SB Trax </a> - an Android app that provides helpful information about hiking in Santa Barbara and includes interactive safety features</li>
           <li>Evolutionary Algorithm (Java) - worked with a team of 15 students to create an algorithm that measures
         the fitness of a population over time</li>
           <li>Wellness Running Log  (Java/MySQL) - built an application to track runs and measure physical and mental wellness</li>
         </ul>
      </div>
      <div className="Text-background">
      <ul>
          <li>Git</li>
          <li>SQL</li>
          <li>HTML/Web Design</li>
          <li>Salesforce (trigger and component development)</li>
          <li>Test-driven development</li>
          <li>OpenGL</li>
        </ul>
      </div>
      
      <div className="Courses Text-background">
        <ul>
        <li>Introduction to Computer Science</li>
        <li>Discrete Mathematics</li>
        <li>Abstract Models for Concrete Problems in Java</li>
        <li>Linear Algebra</li>
        <li>Software Development</li>
        <li>3D Computer Graphics</li>
        <li>Multivariable Calculus</li>
        <li>Subdivision Methods</li>
        <li>Database Design</li>
        <li>Space, Time, and Perfect Algorithms</li>
        <li>Codes and Encryption</li>
        <li>Probability and Statistics</li>
        <li>Computer Architecture and Hardware</li>
        <li>Networks</li>
      </ul>
      </div>
    </div>
    </div>
  );
}
export default ComputerScience
