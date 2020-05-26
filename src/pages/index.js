import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header";
import About from "../components/about";
import Projects from "../components/projects";
import Contact from "../components/contact";

import "../styles/bootstrap/bootstrap-grid.min.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Kenny Hermawan" />
    <section>
      <Header />
    </section>
    <section>
      <About />
    </section>
    <section>
      <Projects />
    </section>
    <section>
      <Contact />
    </section>
  </Layout>
)

export default IndexPage
