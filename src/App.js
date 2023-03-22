import React from 'react'
import './App.css'
import TypewriterComponent from 'typewriter-effect'
import { NavBar } from './components/NavBar.jsx'

function App() {

  return (
    <div className="App">
      <NavBar/>
      <div className='main'>
        <div className="home" title='home'>
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
            <p>Hi, I'm Ben. A passionate Software Developer based in Louisville, KY. Thanks for checking out my page!</p>
          </div>
        </div>
        <div className='about' title='about' style={{ border: '1px solid blue' }}>
          <h2>My Background</h2>
          <p>
            I'm a senior at the University of Louisville majoring in Computer Information Systems with a concentration in Web
            Development. I'm expecting to graduate in May 2023.
          </p>
          <ul>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
