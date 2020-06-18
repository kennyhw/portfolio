import React from "react"
import styles from "../styles/projects.module.css"

function Projects() {
  return (
    <section className={styles.sectionContainer}>
      <div className="row">
        <div className={'col-12 ' + styles.titleBar}>
          <h1 className={styles.titleText}>Projects</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <div className={styles.box}>
            <svg width="275" height="110">
              <rect width="275" height="110" fill="#e42154" />
            </svg>
            <h3 className={styles.projectTitle}>Title</h3>
            <p className={styles.projectDesc}>
              Description description description Description description description Description description description
              Description description description Description description description
          </p>
          </div>
        </div>
        <div className="col-4">
          <div className={styles.box}>
            <svg width="275" height="110">
              <rect width="275" height="110" fill="#e42154" />
            </svg>
            <h3 className={styles.projectTitle}>Title</h3>
            <p className={styles.projectDesc}>
              Description description description Description description description Description description description
              Description description description Description description description
          </p>
          </div>
        </div>
        <div className="col-4">
          <div className={styles.box}>
            <svg width="275" height="110">
              <rect width="275" height="110" fill="#e42154" />
            </svg>
            <h3 className={styles.projectTitle}>Title</h3>
            <p className={styles.projectDesc}>
              Description description description Description description description Description description description
              Description description description Description description description
          </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects
