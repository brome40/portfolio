import React from 'react'
import { Link } from 'react-scroll'
import styles from '../css/NavBar.module.css'
import logo from '../brlogo.png'

export const NavBar = () => {
  const handleResumeButtonClick = () => {
    const filePath = 'https://brome40.github.io/portfolio/BenRomeResume.pdf';
    window.open(filePath, '_blank');
  }

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      window.location.reload(false);
    }, 1000);
  }

  return (
    <header className={styles.navBar}>
      <img src={logo} alt='ben rome logo' onClick={handleLogoClick}/>
      <div className='links'>
        <Link
          to='home'
          smooth
          className={styles.navButton}
        >
          Home
        </Link>
        <Link
          to='about'
          smooth
          offset={-135}
          className={styles.navButton}
        >
          About Me
        </Link>
        <Link
          to='project'
          smooth
          offset={-155}
          className={styles.navButton}
        >
          Projects
        </Link>
        <Link
          className={styles.navButton}
          to="contact"
          smooth
        >
          Contact
        </Link>
        <button
          className={styles.navButton}
          onClick={handleResumeButtonClick}
        >
          Resume
        </button>
      </div>
    </header>
  );
}
