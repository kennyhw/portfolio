import React from "react"

import { GrGithub, GrLinkedinOption } from "react-icons/gr"

import styles from "../styles/about.module.css"

/*
 * An "About Me" section containing a brief summary of myself
 * and a row of site/social media links
 */
function About() {
  return (
    <section className={styles.sectionContainer}>
      <div className="row">
        <div className={'col-12 ' + styles.titleBar}>
          <h1 className={styles.titleText}>Hi there, I'm Kenny!</h1>
        </div>
      </div>
      <div className="row">
        <div className={'col-12 ' + styles.textField}>
          <p>
            I'm a second-year undergraduate currently pursuing a major in Information Systems
                and a minor in Economics at the National University of Singapore (NUS). Fueled by
                a passion for problem-solving, programming, and how its products can improve the way we live, I have undertaken
                a number of software engineering projects utilizing a plethora of different technology stacks, mainly
                in the domain of web development.
          </p>
        </div>
      </div>
      <div className="row">
        <div className={'col-12 ' + styles.iconsBar}>
          <a className={styles.siteIconAnchor} href="https://github.com/kennyhw"><GrGithub className={styles.siteIcon} /></a>
          <a className={styles.siteIconAnchor} href="https://linkedin.com/in/kenny-hermawan"><GrLinkedinOption className={styles.siteIcon} /></a>
        </div>
      </div>
    </section>
  );
}

export default About
