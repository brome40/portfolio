import React from 'react'
import { SkillsArea } from './SkillsArea'
import styles from '../css/AboutSection.module.css'

export const AboutSection = () => {
  return (
    <div className={styles.about}>
      <h2>My Background</h2>
      <p>
        I'm a senior at the University of Louisville majoring in Computer Information Systems with a concentration in Web
        Development. I'm expecting to graduate in May 2023.
      </p>
      <SkillsArea />
    </div>
  );
}
