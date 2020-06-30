import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { GoLink, GoRepo } from "react-icons/go"

import styles from "../styles/projects.module.css"

function Projects() {
  const data = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "assets/projects-image/01-checkmark.png" }) {
          childImageSharp {
            fixed(width: 300, height: 220) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
      }
    `
  );

  return (
    <section className={styles.sectionContainer}>
      <div className="row">
        <div className={'col-12 ' + styles.titleBar}>
          <h1 className={styles.titleText}>Projects</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className={styles.projectContainer}>
          <Img className={styles.projectImage} fixed={data.file.childImageSharp.fixed} alt="CheckMark" draggable="False"/>
            <span className={styles.projectTitle}>CheckMark</span><br></br>
            <span className={styles.projectDesc}>A to-do list application built with React and Ruby on Rails</span><br></br>
            <a className={styles.projectLinkIconAnchor} href=""><GoLink className={styles.projectLinkIcon} /></a>
            <a className={styles.projectLinkIconAnchor} href=""><GoRepo className={styles.projectLinkIcon} /></a>
          </div>
        </div>
        <div className="col-md-4">
          <div className={styles.projectContainer}>
            <svg width="400" height="220">
              <rect width="300" height="220" />
            </svg>
            <h3>Title</h3>
            <p>
              Description
            </p>
          </div>
        </div><div className="col-md-4">
          <div className={styles.projectContainer}>
            <svg width="400" height="220">
              <rect width="300" height="220" />
            </svg>
            <h3>Title</h3>
            <p>
              Description
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects
