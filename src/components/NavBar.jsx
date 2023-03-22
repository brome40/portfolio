import React from 'react'
import { Link } from "react-scroll"
import styles from '../css/NavBar.module.css'
import logo from '../brlogo.png'

export const NavBar = ({ activeLink, onLinkClick }) => {

  const handleResumeButtonClick = () => {
    const filePath = 'portfolio/BenRomeResume.pdf';
    window.open(filePath, '_blank');
  }

  return (
    <>
      <header className={styles.navBar}>
        <img src={logo} alt='ben rome logo'/>
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
            className={styles.navButton}
          >
            About Me
          </Link>
          <Link
            className={styles.navButton}
            to="contact"
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
    </>
  );
}
