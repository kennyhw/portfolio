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
    </section>
  );
}

export default TechnicalSkills
