import React, { useState } from 'react'
import styles from '../css/SkillsArea.module.css'
import SkillsJSON from '../json/skillsData.json'

export const SkillsArea = () => {
  const reactlogo = require('../images/react-logo.png');
  const jslogo = require('../images/js-logo.png')
  const tslogo = require('../images/ts-logo.png')
  const pylogo = require('../images/py-logo.png')
  const cslogo = require('../images/cs-logo.png')

  const [hoveredImage, setHoveredImage] = useState();

  return (
    <div>
      <h2 className={styles.header}>Core Skills</h2>
      <div>
        <Skill
          src={jslogo}
          alt='JavaScript'
          hovered={hoveredImage}
          setHovered={setHoveredImage}/>
        <Skill
          src={tslogo}
          alt='TypeScript'
          hovered={hoveredImage}
          setHovered={setHoveredImage}/>
        <Skill
          src={pylogo}
          alt='Python'
          hovered={hoveredImage}
          setHovered={setHoveredImage}/>
        <Skill
          src={cslogo}
          alt='C#'
          hovered={hoveredImage}
          setHovered={setHoveredImage}/>
        <Skill
          src={reactlogo}
          alt='React'
          hovered={hoveredImage}
          setHovered={setHoveredImage}/>
      </div>
      {hoveredImage === null && <p className={styles.helpText}>Hover over an icon to view more...</p>}
      {hoveredImage  && <SkillSummary skill={hoveredImage}/>}
    </div>
  );
}

export const Skill = ({ src, alt, hovered, setHovered }) => {

  const handleMouseEnter = (e) => {
    setHovered(alt);
  };

  const handleMouseLeave = (e) => {
    setHovered(null);
  }

  return (
      <img
        className={styles.iconWrapper}
        src={src}
        alt={alt}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
  );
}

export const SkillSummary = ({ skill }) => {
  return (
    <div className={styles.summary}>
      <h2 className={styles.summaryTitle}>{skill}</h2>
      <ul>
        {SkillsJSON[skill].Tasks?.map((task, index) => {
          return <li className={styles.summaryItem} key={index}>{task}</li>
        })}
      </ul>
    </div>
  );
}
