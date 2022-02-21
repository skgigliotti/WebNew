import React from 'react';
import Section from '../components/Section';
import cip from '../photos/cip.jpg';
import db from '../photos/db.jpg';
import hh from '../photos/hh.jpg';
import sbtrax from '../photos/sbtrax.jpg';
import salesforce from '../photos/salesforce.jpg';
import youtube from '../photos/youtube.jpg';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';


const ComputerScience = () => {
  const items = [{ image: cip, title: 'Code in Place', description: 'TA for online course offered by Stanford University during the COVID-19 pandemic that brought together 12,000 students and 1100 volunteer teachers participating from around the world.', url: 'https://codeinplace.stanford.edu/' },
  { image: youtube, title: 'YouTube Channel (Javascript/Python)', description: 'teaching small things I\'ve learned when I can, using my voice as a womxn in tech', url: 'https://www.youtube.com/channel/UCjANf4SX1kA_wTu_NDFF6mA' },
  { image: hh, title: 'Helping Hands (Vue.js/Firebase)', description: 'a web app that helps educators monitor student mental well-being and provide struggling students with supportive resources', url: 'https://devpost.com/software/change_name_later' },
  { image: db, title: 'Student Outreach Database (PSQL/PHP/HTML)', description: 'used for Westmont College ministry teams to monitor participation', url: 'https://westmont-ministries-outreach.herokuapp.com/' },
  { image: salesforce, title: 'Advancement/Admissions Systems (Javascript/Apex/SOQL)', description: 'built out Salesforce systems for higher education and launched a student swe program', url: 'https://www.westmont.edu/center-applied-technology' },
  { image: sbtrax, title: 'SB Trax (Java)', description: 'an Android app that provides helpful information about hiking in Santa Barbara and includes interactive safety features', url: 'https://devpost.com/software/sbtrax-v486h7' },
  ]
  return (
    <div className="Page-all">
      <div className="Computer-science">
        <div className="Cs-projects Text-background">
          <Section title="Projects" items={items} />


        </div>
        <div className="Text-background">
          <h2>Experience</h2>
          <ul class="SG">
            <Card class="sgLi"><Typography>💚</Typography>   <Typography>Vue.js</Typography></Card>
            <Card class="sgLi"><Typography>🚀</Typography>   <Typography>Django</Typography></Card>
            <Card class="sgLi"><Typography>🐍</Typography>   <Typography>Python</Typography></Card>
            <Card class="sgLi"><Typography>🔴</Typography>   <Typography>Ruby on Rails</Typography></Card>
            <Card class="sgLi"><Typography>🗄️</Typography>   <Typography>psql</Typography></Card>
            <Card class="sgLi"><Typography>️‍🔥</Typography>   <Typography>dynamodb</Typography></Card>
            <Card class="sgLi"><Typography>☁️</Typography>   <Typography>Salesforce Development</Typography></Card>
            <Card class="sgLi"><Typography>⚛️</Typography>   <Typography>React</Typography></Card>
          </ul>
          <h2>Courses</h2>
          <ul class="SG">
            <Card class="sgLi"><Typography>Introduction to Computer Science</Typography></Card>
            <Card class="sgLi"><Typography>Discrete Mathematics</Typography></Card>
            <Card class="sgLi"><Typography>Abstract Models for Concrete Problems in Java</Typography></Card>
            <Card class="sgLi"><Typography>Linear Algebra</Typography></Card>
            <Card class="sgLi"><Typography>Software Development</Typography></Card>
            <Card class="sgLi"><Typography>3D Computer Graphics</Typography></Card>
            <Card class="sgLi"><Typography>Multivariable Calculus</Typography></Card>
            <Card class="sgLi"><Typography>Subdivision Methods</Typography></Card>
            <Card class="sgLi"><Typography>Database Design</Typography></Card>
            <Card class="sgLi"><Typography>Space, Time, and Perfect Algorithms</Typography></Card>
            <Card class="sgLi"><Typography>Codes and Encryption</Typography></Card>
            <Card class="sgLi"><Typography>ProbabiCardty and Statistics</Typography></Card>
            <Card class="sgLi"><Typography>Computer Architecture and Hardware</Typography></Card>
            <Card class="sgLi"><Typography>Networks</Typography></Card>
            <Card class="sgLi"><Typography>Artificial IntelCardgence</Typography></Card>
            <Card class="sgLi"><Typography>Formal Languages & Automata</Typography></Card>
          </ul>
        </div>
      </div>

    </div>
  );
}
export default ComputerScience