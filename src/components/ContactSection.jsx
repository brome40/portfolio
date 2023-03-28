import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { CopyrightBar } from './CopyrightBar'
import styles from '../css/ContactSection.module.css'

export const ContactSection = () => {

  return(
    <div className={styles.contact}>
      <h2>Contact Me</h2>
      <div className={styles.iconContainer}>
        <div>
          <a href="https://github.com/brome40/" target='_blank' rel='noreferrer' className={styles.iconLink}>
            <FaGithub size={128} color='lightblue' className={styles.icon}/>
          </a>
          <p>GitHub</p>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/ben-rome/" target='_blank' rel='noreferrer' className={styles.iconLink}>
            <FaLinkedin size={128} color='lightblue' className={styles.icon}/>
          </a>
          <p>LinkedIn</p>
        </div>
      </div>
      <CopyrightBar />
    </div>
  );
}
