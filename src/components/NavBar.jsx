import React, { useState, useEffect } from 'react';
import styles from '../css/NavBar.module.css';

export const NavBar = ({ activeLink, onLinkClick }) => {

  const handleLinkClick = (link, event) => {
    onLinkClick(link, event);
  }

  return (
    <header className={styles.navBar}>
      <button
        className={styles.navButton}
        onClick={(event) => handleLinkClick('/', event)}
      >
        Home
      </button>
      <button
        className={styles.navButton}
        onClick={(event) => handleLinkClick('/about', event)}
      >
        About Me
      </button>
      <button
        className={styles.navButton}
        onClick={(event) => handleLinkClick('/contact', event)}
      >
        Contact
      </button>
    </header>
  );
}
