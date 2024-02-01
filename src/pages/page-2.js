import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import Seo from '../components/seo'

const SecondPage = ({ data }) => {
  console.log(data)

  return (
    <>
      <Layout>
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>

        {data.allFile.edges.map(({ node }) => (
          <GatsbyImage image={getImage(node)} alt={node.name} key={node.id} />
        ))}
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    </>
  )
}

export const query = graphql`
  query MyQuery {
    allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "robots" }
      }
    ) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData
          }
          id
          name
        }
      }
    }
  }
`

export const Head = () => <Seo title="Page two" />

export default SecondPage
