import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
// ...GatsbyImageSharpFluid

const ProjectsPage = ({ data: { allStrapiProjects: { nodes: projects } } }) => {

  console.log(projects)

  return (
    <Layout>
      <section className="project-pages">
        <Projects projects={projects} title='all projects' />
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        description
        github
        id
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        title
        stack {
          id
          title
        }
        url
      }
    }
  }
`

export default ProjectsPage
