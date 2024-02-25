import * as React from "react"
// import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ServicesPage = ({ data }) => {
  return (
    <Layout>
      <Seo
        title="Web Design and Development Services Including SEO"
        description="Discover top-tier software development services at Developer Gus. Our team specializes in creating custom solutions that drive growth and efficiency for your business. From web design and development to leads and traffic generation services, we ensure cutting-edge technology tailored to your needs. Visit us to transform your digital presence today!"
      />
      <h1>Hello</h1>
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */

export default ServicesPage
