import React from 'react'
import TypewriterComponent from 'typewriter-effect'
import styles from '../css/HomeSection.module.css'

export const HomeSection = () => {
  return (
    <div className={styles.home}>
        <div className={styles.name}>Ben Rome</div>
        <div className={styles.title}>
          <TypewriterComponent
            options ={{
              strings: ['Web Developer', 'Software Developer', 'UI/UX Developer', 'Front-end Developer', 'React Developer'],
              autoStart: true,
              loop: true
            }}
          />
        </div>
        <div className={styles.intro}>
          <p>Hi, I'm Ben, a passionate Software Developer based in Louisville, KY. Thanks for checking out my page!</p>
        </div>
    </div>
  );
}
