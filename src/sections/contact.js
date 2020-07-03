import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FaCopyright } from "react-icons/fa"

import styles from "../styles/contact.module.css"

/*
 * Footer section containing my email address
 * and some other things
 */
function Contact() {
  const data = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "assets/logo.png" }) {
          childImageSharp {
            fixed(width: 48, height: 48) {
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
        <div className="col-12">
          <Img className={styles.siteLogo} fixed={data.file.childImageSharp.fixed} alt="Site Logo" draggable="False" /><br></br>
          <div className={styles.contactContainer}>
            <span className={styles.contactDetails}>
              Get in touch!<br></br>
              <a className={styles.contactEmail} href="mailto:kennyhermawan7@gmail.com">kennyhermawan7@gmail.com</a>
            </span>
          </div>
          <div className={styles.copyrightContainer}>
            <FaCopyright className={styles.copyrightIcon} />
            <span className={styles.copyrightText}>
              2020
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact
