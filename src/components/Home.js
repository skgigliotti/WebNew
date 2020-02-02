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
          and enjoy the crossover of these two fields. My long-term goal is to teach computer science to primary and secondary students. 
          I am determined to involve and empower young students from underrepresented groups to engage with technology creation. 
          I am commited to ethical computing and am passionate
          about seeking justice and equity through technology and otherwise.</p>
          
          <p>Currently, I work as a Salesforce Developer and hold a Platform Developer I certification. I get the opportunity to build out innovative solutions for the administration at my college. 
            I have also worked as a developer intern at EF Education First in 
          Boston, MA. At EF, I got to focus on improving and developing technology for student travelers.
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
