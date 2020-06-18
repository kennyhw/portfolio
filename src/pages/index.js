import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../sections/header"
import About from "../sections/about"
import TechnicalSkills from "../sections/technical-skills"
import Projects from "../sections/projects"
import Contact from "../sections/contact"

import "../styles/bootstrap/bootstrap-grid.min.css"
import styles from "../styles/index.module.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Kenny Hermawan" />
    <div className={styles.header}>
      <Header />
    </div>
    <div className={styles.about}>
      <About />
    </div>
    <div className={styles.technicalSkills}>
      <TechnicalSkills />
    </div>
    <div className={styles.projects}>
      <Projects />
    </div>
    <div className={styles.contact}>
      <Contact />
    </div>
  </Layout>
)

export default IndexPage
