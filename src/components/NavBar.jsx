import React, { useState, useEffect } from 'react'
import { Link, animateScroll as scroll } from "react-scroll"
import styles from '../css/NavBar.module.css'
import logo from '../brlogo.png'

export const NavBar = ({ activeLink, onLinkClick }) => {

  const handleLinkClick = (link) => {
    onLinkClick(link);
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
          >
            Contact
          </Link>
        </div>
      </header>
    </>
  );
}
