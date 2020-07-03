import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import styles from "../styles/contact.module.css"

/*
 * Page footer
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
              <span className={styles.contactEmail}>kennyhermawan7@gmail.com</span>
            </span>
          </div>
          <div className={styles.footerContainer}>
            <span className={styles.footerDetails}>
              Copyright
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact
