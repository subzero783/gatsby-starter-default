import * as React from "react"
// import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero/Hero"
import Services from "../components/Services/Services"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Seo
        title="Web Development and Search Engine Optimization"
        description="Unleashing Digital Brilliance with Developer Gus. Navigating the World of Web Design, Development and Beyond. Empowering Your Business with SEO and Google Ads Mastery."
      />
      <Hero />
      <Services />
      <ul className="my-9">
        {/* {data.allMarkdownRemark.edges.map(edge => {
          console.log("edge", edge)
          const { title, description, date } = edge.node.frontmatter
          return (
            <li key={edge.node.id} className="my-4">
              <h2 className="text-2xl font-semibold">{title}</h2>
              <h3>{date}</h3>
              <p>{description}</p>
            </li>
          )
        })} */}
      </ul>
    </Layout>
  )
}

// export const query = graphql`
//   query ServiceQuery {
//     allMarkdownRemark(
//       filter: { frontmatter: { category: { eq: "service" } } }
//     ) {
//       edges {
//         node {
//           frontmatter {
//             title
//             description
//             image
//             category
//           }
//           id
//         }
//       }
//     }
//   }
// `

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */

export default IndexPage
