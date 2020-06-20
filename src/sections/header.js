import React from "react"

import scrollTo from "gatsby-plugin-smoothscroll"

import styles from "../styles/header.module.css"

function Header() {
  return (
    <section className={styles.sectionContainer}>
      <div className="row">
        <div className={'col-12 ' + styles.picContainer}>
          <svg width="150" height="150">
            <circle cx="75" cy="75" r="75" fill="#e41376" />
          </svg>
        </div>
      </div>
      <div className="row">
        <div className={'col-12 ' + styles.textContainer}>
          <span className={styles.name}>Kenny Hermawan<span className={styles.nameDot}>.</span></span><br></br>
          <span className={styles.desc}>Aspiring Software Developer | Undergraduate @ NUS</span><br></br>
        </div>
      </div>
      <div className="row">
        <div className={'col-12 ' + styles.arrowContainer}>
          <svg className={styles.arrowDown} onClick={() => scrollTo("#about-me")} xmlns="http://www.w3.org/2000/svg" width="35.924" height="17.962" viewBox="0 0 35.924 17.962">
            <title>View portfolio</title>
            <g>
              <polygon points="17.962 17.962 35.924 0 0 0 17.962 17.962"/>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Header
