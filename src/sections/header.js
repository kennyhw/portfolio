import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import scrollTo from "gatsby-plugin-smoothscroll"

import styles from "../styles/header.module.css"

function Header() {
  const data = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "assets/profile-picture.png" }) {
          childImageSharp {
            fixed(width: 175, height: 175) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  );

  return (
    <section className={styles.sectionContainer}>
      <div className="row">
        <div className={'col-12 ' + styles.picContainer}>
          <Img className={styles.profilePicture} fixed={data.file.childImageSharp.fixed} alt="Photo" draggable="False"/>
        </div>
      </div>
      <div className="row">
        <div className={'col-12 ' + styles.textContainer}>
          <span className={styles.name}>Kenny Hermawan<span className={styles.nameDot}>.</span></span>
          <br></br>
          <span className={styles.desc}>Aspiring Software Developer | Undergraduate @ NUS</span>
        </div>
      </div>
      <div className="row">
        <div className={'col-12 ' + styles.arrowContainer}>
          <svg className={styles.arrowDown} onClick={() => scrollTo("#about-me")} 
              xmlns="http://www.w3.org/2000/svg" width="35.924" height="17.962" 
              viewBox="0 0 35.924 17.962">
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
