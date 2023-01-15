import './App.css';
import brlogo from './brlogo.png';
import TypewriterComponent from 'typewriter-effect';

function App() {
  return (
    <div className="App">
      <header className="nav-bar">
        <img src={brlogo} alt='ben rome logo'/>
      </header>
      <div className='main'>
        <div className='name'>Ben Rome</div>
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
