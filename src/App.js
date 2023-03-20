import React, { useState } from 'react';
import './App.css';
import TypewriterComponent from 'typewriter-effect';
import { NavBar } from './components/NavBar.jsx';

function App() {
  const [activeLink, setActiveLink] = useState('/');

  const handleLinkClick = (link, event) => {
    event.preventDefault();
    setActiveLink(link);
    window.location.href = link;
  };

  return (
    <div className="App">
      <NavBar onLinkClick={handleLinkClick}/>
      <div className='main'>
        <div className='name'>Ben Rome</div>
        {activeLink === '/' && <p>Home</p> }
        {activeLink === '/about' && <p>About</p> }
        {}
        <div className='title'>
          <TypewriterComponent
            options ={{
              strings: ['Web Developer', 'Software Developer', 'UI/UX Developer', 'Frontend Developer'],
              autoStart: true,
              loop: true
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
