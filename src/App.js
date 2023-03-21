import React, { useState } from 'react'
import './App.css'
import TypewriterComponent from 'typewriter-effect'
import { NavBar } from './components/NavBar.jsx'

function App() {
  const [activeLink, setActiveLink] = useState('/');

  const handleLinkClick = (link) => {
    setActiveLink(link);
    window.location.href = link;
  };

  return (
    <div className="App">
      <NavBar onLinkClick={handleLinkClick}/>
      <div className='main'>
        <div className="home" title='home' style={{ border: '1px solid green' }}>
          <div className='name'>Ben Rome</div>
          <div className='title'>
            <TypewriterComponent
              options ={{
                strings: ['Web Developer', 'Software Developer', 'UI/UX Developer', 'Front-end Developer', 'React Developer'],
                autoStart: true,
                loop: true
              }}
            />
          </div>
          <div className='intro'>
            <p>Hi, I'm Ben. A passionate Front-end Developer based in Louisville, KY. Thanks for checking out my page!</p>
          </div>
        </div>
        <div className='about' title='about' style={{ border: '1px solid blue' }}></div>
      </div>
    </div>
  );
}

export default App;
