import React from 'react';
import profile from '../photos/profile.JPG';

const Home = () => {
  return (
    <div className="Page-all">
        
        <h1>
          About Me
        </h1>
        
        <div className="Home Text-background">
        <div>
        <p>
          I am a senior at Westmont College in Santa Barbara, CA. I study Computer Science and Spanish
          and thrive in the crossover of these two fields. I am seeking opportunities to continue working in the field of education technology.
          I am commited to ethical computing and am passionate
          about seeking justice and equality through technology and otherwise.</p>
          
          <p>Most recently, I worked as an intern at EF Education First in 
          Boston, MA. At EF, I got to focus on improving and developing technology for student travelers.
          I also have a strong math background and professional experience
          working with databases and Salesforce. 
        </p>
        
        <p>
          When I am not programming or reading great Spanish literature, you'll find me running, taking photos,
          or knitting.
        </p>
        </div>
        <div className="Profile">
      <img src={profile} style={{width: '75%'}} title="Here I am traveling in Portland, ME. Camera in hand as always!"/>
      </div>
  
      </div>
     
      
    </div>
  );
}
export default Home
