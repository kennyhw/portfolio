import React from "react"

import { useStaticQuery, graphql } from "gatsby"

import styles from "../styles/technical-skills.module.css"

/*
 * A section listing the technologies and libraries/frameworks
 * that I have worked with.
 */
function TechnicalSkills() {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(filter: {frontmatter: {section: {eq: "technical-skills"}}}) {
          edges {
            node {
              id
              frontmatter {
                title
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
          <h1 className={styles.titleText}>My Toolbox</h1>
          <span className={styles.descText}>Here are the tools and technologies that I'm familiar with.</span>
        </div>
      </div>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div className="row">
          <div className="col-12">
            <div className={styles.skillGroupContainer}>
              <span className={styles.skillGroupTitle}>{node.frontmatter.title}</span><br></br>
              <span className={styles.skillGroupText}>{node.excerpt}</span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default TechnicalSkills
