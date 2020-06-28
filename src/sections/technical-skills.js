import React from "react"
import styles from "../styles/technical-skills.module.css"

function TechnicalSkills() {
  return (
    <section className={styles.sectionContainer}>
      <div className="row">
        <div className={'col-12 ' + styles.titleBar}>
          <h1 className={styles.titleText}>Technical Skills</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className={styles.skillGroupContainer}>
            <span className={styles.skillGroupTitle}>Front-End Development</span><br></br>
            <span className={styles.skillGroupText}>React, etc</span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className={styles.skillGroupContainer}>
            <span className={styles.skillGroupTitle}>Front-End Development</span><br></br>
            <span className={styles.skillGroupText}>React, etc</span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className={styles.skillGroupContainer}>
            <span className={styles.skillGroupTitle}>Front-End Development</span><br></br>
            <span className={styles.skillGroupText}>React, etc</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechnicalSkills
