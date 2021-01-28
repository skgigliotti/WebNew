import React from 'react';
import profile from '../photos/profile.JPG';
import '../App.css';

const Home = () => {
  return (
    <div className="Page-all">

      <h1>Hello World</h1>

      <div className="Home Text-background">
        <div>
          <p>
            I am a computer scientist and a language learner.
            My long-term goal is to teach computer science to primary and secondary students.
            I am determined to involve and empower young students from underrepresented groups to engage with technology creation.
          I am passionate about seeking justice and equity through technology and otherwise.</p>

          <p>Professionally, I work as a Full Stack Software Developer at Outside Open in Santa Barbara, CA.
        </p>

          <p>
            When I am not programming, you'll find me running, taking photos,
            or reading great Spanish literature.
        </p>
        </div>
        <div className="Profile">
          <img src={profile} style={{ width: '75%' }} title="Here I am traveling in Portland, ME. Camera in hand as always!" />
        </div>

      </div>


    </div>
  );
}
export default Home
