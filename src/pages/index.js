import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../sections/header"
import About from "../sections/about"
import Projects from "../sections/projects"
import Contact from "../sections/contact"

import "../styles/bootstrap/bootstrap-grid.min.css"
import styles from "../styles/index.module.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Kenny Hermawan" />
    <div className="container">
      <div className={'row ' + styles.header}>
        <div className="col-12">
          <Header />
        </div>
      </div>
      <div className={'row ' + styles.about}>
        <div className="col-12">
          <About />
        </div>
      </div>
      <div className={'row ' + styles.projects}>
        <div className="col-12">
          <Projects />
        </div>
      </div>
      <div className={'row ' + styles.contact}>
        <div className="col-12">
          <Contact />
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
