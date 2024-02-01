import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import styled from "styled-components"
import Seo from "../components/seo"

const Description = styled.div`
  color: red;
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Seo
        title="Web Development and Search Engine Optimization "
        description="Developer Gus"
      />
      <div className="my-4">
        <h1 className="text-xl">Home page</h1>
        <h2 className="text-lg">Blog Posts</h2>
      </div>
      <ul className="my-9">
        {data.allMarkdownRemark.edges.map(edge => {
          console.log("edge", edge)
          const { title, description, date } = edge.node.frontmatter
          return (
            <li key={edge.node.id} className="my-4">
              <h2 className="text-2xl font-semibold">{title}</h2>
              <h3>{date}</h3>
              <p>{description}</p>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query BlogPostQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            description
            date
          }
          id
        }
      }
    }
  }
`

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */

export default IndexPage
