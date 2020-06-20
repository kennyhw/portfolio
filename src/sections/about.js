import React from "react"

import styles from "../styles/about.module.css"

function About() {
  return (
    <section className={styles.sectionContainer}>
      <div className="row">
        <div className={'col-12 ' + styles.titleBar}>
          <h1 className={styles.titleText}>About Me</h1>
        </div>
      </div>
      <div className="row">
        <div className={'col-12 ' + styles.textField}>
          <p>
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. 
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. 
          </p>
          <p>
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. 
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. 
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
