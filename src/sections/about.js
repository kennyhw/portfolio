import React from "react"

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
                and a minor in Economics at the National University of Singapore (NUS). 
          </p>
        </div>
      </div>
      <div className="row">
        <div className={'col-12 ' + styles.iconsBar}>
          <svg width="26" height="26">
            <circle cx="13" cy="13" r="13" fill="#e41376" />
          </svg>
          {' '}
          <svg width="26" height="26">
            <circle cx="13" cy="13" r="13" fill="#e41376" />
          </svg>
          {' '}
          <svg width="26" height="26">
            <circle cx="13" cy="13" r="13" fill="#e41376" />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default About
