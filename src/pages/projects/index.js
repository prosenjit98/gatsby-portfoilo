import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "../../styles/projects.module.css"

export default function Projects({ data }) {
  const projects = data.projects.nodes
  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Projects</h2>
        <h3>Projects and Websides I've created</h3>
        <div className={styles.projects}>
          {projects.map(project => {
            const image = getImage(project.frontmatter.thumb)
            return (

              <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
                <div >
                  <GatsbyImage image={image} />
                  <h3>{project.frontmatter.title}</h3>
                  <p>{project.frontmatter.stack}</p>
                </div>
              </Link>
            )
          })}
        </div>
        <p>Like what you see? Email me at {data.contact.siteMetadata.contact} for a qoute!</p>
      </div>
    </Layout>
  )
}

export const projectPage = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(sort: {fields: frontmatter___title, order: ASC}) {
      nodes {
        frontmatter {
          title
          stack
          slug
          thumb {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`


