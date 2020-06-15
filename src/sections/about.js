import React from "react"
import styles from "../styles/about.module.css"

function About() {
  return (
    <section className={styles.sectionContainer}>
      <div className="row">
        <div className={'col-12 ' + styles.titleBar}>
          <h1>About Me</h1>
        </div>
      </div>
      <div className="row">
        <div className={'col-12 ' + styles.textField}>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
      </div>
      <div className="row">
        <div className={'col-12 ' + styles.iconsBar}>
          <h1>O O O</h1>
        </div>
      </div>
    </section>
  );
}

export default About
