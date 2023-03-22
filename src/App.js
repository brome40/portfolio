import React from 'react'
import './App.css'
import { Element } from 'react-scroll'
import { NavBar } from './components/NavBar'
import { HomeSection } from './components/HomeSection'
import { AboutSection } from './components/AboutSection'

function App() {

  return (
    <div className="App">
      <NavBar/>
      <div className='main'>
        <Element name='home'>
          <HomeSection />
        </Element>
        <Element name='about'>
          <AboutSection />
        </Element>
      </div>
    </div>
  );
}

export default App;
