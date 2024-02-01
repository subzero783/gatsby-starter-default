import * as React from "react"

import Layout from "../components/layout"
import styled from "styled-components"

const Description = styled.div`
  color: red;
`

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
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <Description>Styled component</Description>
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */

export default IndexPage
