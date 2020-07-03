import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { GoLink, GoRepo } from "react-icons/go"

import styles from "../styles/projects.module.css"

/*
 * A section showcasing all the projects
 * that I have done. Details of the projects are
 * managed in markdown files.
 */
function Projects() {
  const data = useStaticQuery(
    graphql`
      query {
        allFile(filter: {relativeDirectory: {eq: "assets/projects-image"}}) {
          edges {
            node {
              id
              name
              childImageSharp {
                fixed(width: 300, height: 220) {
                  ...GatsbyImageSharpFixed_noBase64
                }
              }
            }
          }
        }
        allMarkdownRemark(filter: {frontmatter: {section: {eq: "projects"}}}, sort: {fields: [frontmatter___date], order: DESC}) {
          edges {
            node {
              id
              frontmatter {
                title
                imgfilename
                sitelink
                repolink
                date
              }
              excerpt
            }
          }
        }
      }
    `
  );

  return (
    <section className={styles.sectionContainer}>
      <div className="row">
        <div className={'col-12 ' + styles.titleAndDescBar}>
          <h1 className={styles.titleText}>My Projects</h1>
          <span className={styles.descText}>Here are some of the things that I've worked on.</span>
        </div>
      </div>
      <div className="row">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div className="col-md-4">
            <div className={styles.projectContainer}>
            <Img className={styles.projectImage} fixed={data.allFile.edges.find(image => image.node.name === node.frontmatter.imgfilename).node.childImageSharp.fixed} alt={node.frontmatter.title} draggable="False" />
              <span className={styles.projectTitle}>{node.frontmatter.title}</span><br></br>
              <span className={styles.projectDesc}>{node.excerpt}</span><br></br>
              {node.frontmatter.sitelink === "none" ? <span></span> : <a className={styles.projectLinkIconAnchor} href={node.frontmatter.sitelink}><GoLink className={styles.projectLinkIcon} /></a>}
              {node.frontmatter.repolink === "none" ? <span></span> : <a className={styles.projectLinkIconAnchor} href={node.frontmatter.repolink}><GoRepo className={styles.projectLinkIcon} /></a>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects
