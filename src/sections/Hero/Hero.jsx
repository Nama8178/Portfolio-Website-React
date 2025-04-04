import React from 'react'
import styles from './HeroStyle.module.css'
import heroImg from './../../assets/SharedScreenshot-photoaidcom-cropped.jpg'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import twitterLight from '../../assets/twitter-light.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import githubLight from '../../assets/github-light.svg'
import twitterDark from '../../assets/twitter-dark.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import githubDark from '../../assets/github-dark.svg'
import CV from '../../assets/Resume.pdf'
import { useTheme } from '../../common/ThemeContext'

function Hero() {
  const  { theme, toggleTheme } = useTheme();
  
  const themeIcon = theme === 'light' ? sun : moon ;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
    <div className={styles.colorModeContainer}>
      <img
        src={heroImg}
        className={styles.hero}
        alt="Profile picture of Aman Kumar"
      />
      <img
        className={styles.colorMode}
        src={themeIcon}
        alt="Color mode icon"
        onClick={toggleTheme}
      />
    </div>
    <div className={styles.info}>
      <h1>
        Aman
        <br />
        Kumar
      </h1>
      <h2>Frontend Developer</h2>
      <span>
        <a href="https://twitter.com/" target="_blank">
          <img src={twitterIcon} alt="Twitter icon" />
        </a>
        <a href="https://github.com/Nama8178" target="_blank">
          <img src={githubIcon} alt="Github icon" />
        </a>
        <a href="https://www.linkedin.com/in/aman-kumar-b7758625b/" target="_blank">
          <img src={linkedinIcon} alt="Linkedin icon" />
        </a>
      </span>
      <p className={styles.description}>
        With a passion for developing modern React web apps for commercial
        businesses.
      </p>
      <a href={CV} download>
        <button className="hover">Resume</button>
      </a>
    </div>
  </section>
  )
}

export default Hero