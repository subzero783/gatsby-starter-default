/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header/header"
import Footer from "./footer"
// import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <>
      <Header
        siteDescription={data.site.siteMetadata?.description || `Description`}
        siteTitle={data.site.siteMetadata?.title || `Title`}
      />
      <div>
        <main className="mx-auto block">{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
