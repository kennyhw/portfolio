import React from "react"
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
          <p className={styles.name}>Kenny Hermawan</p>
          <p className={styles.desc}>Undergraduate @ NUS</p>
        </div>
      </div>
    </section>
  );
}

export default Header
