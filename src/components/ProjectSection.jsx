import React, { useState, useEffect } from 'react'
import styles from '../css/ProjectSection.module.css'
import ProjectsJSON from '../json/projectData.json'

export const ProjectSection = () => {
  const slides = Object.keys(ProjectsJSON);

  return (
    <div className={styles.projects}>
      <h2>My Projects</h2>
      <Slideshow slides={slides}/>
    </div>
  );
}

export const Slideshow = ({ slides }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [slideData, setSlideData] = useState();
  const totalSlides = slides.length;

  useEffect(() => {
    const currentKey = slides[currentSlideIndex];
    setSlideData(ProjectsJSON[currentKey])
  },[slides, currentSlideIndex]);

  const handleNextSlide = () => {
    if (currentSlideIndex < totalSlides - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  }

  const handlePrevSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  }

  return (
    <>
      <div className={styles.slideTitleBar}>
        <button onClick={handlePrevSlide} disabled={currentSlideIndex === 0}>Previous</button>
        <div className={styles.slideTitle}>{slideData?.title}</div>
        <button onClick={handleNextSlide} disabled={currentSlideIndex === totalSlides - 1}>Next</button>
      </div>
      <div className={styles.slideDesc}>{slideData?.description}</div>
      <div className={styles.slideProjects}>
        {slideData?.projects?.map((project, index) => (
          <Project
            key={index}
            name={project.name}
            zipPath={project.zipPath}
            gitLink={project.gitLink}
          />
        ))}
      </div>
    </>
  );
}

export const Project = ({ name, zipPath, gitLink }) => {
  const handleGitButtonClick = () => {
    window.open(gitLink, '_blank');
  }

  const handleDownload = async (zipPath) => {
    try {
      const response = await fetch(zipPath);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.setAttribute('href', url);
      link.setAttribute('download', zipPath.split('/').pop());
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      }
    catch (error) {
      console.error('Error downloading source code:', error)
    }
  }

  if (zipPath.split('.').pop() === 'png') {
    // require(zipPath);
    return (
      <div className={styles.project}>
        {/* <div>{name}</div>
        <img src={zipPath}/> */}
      </div>
    );
  }

  return (
    <div className={styles.project}>
      <div>{name}</div>
      <button onClick={handleGitButtonClick} disabled={gitLink === ""}>GitHub</button>
      <button onClick={() => handleDownload(zipPath)} disabled={zipPath === ""}>Download Code</button>
    </div>
  );
}
