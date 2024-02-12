import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

export default function Services() {
  const data = useStaticQuery(graphql`
    query ServiceQuery {
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "service" } } }
      ) {
        edges {
          node {
            frontmatter {
              title
              description
              image
              category
              link
            }
            id
          }
        }
      }
    }
  `)

  return (
    <section className="services">
      <div className="container mx-auto">
        <p className="text-with-line">Checkout Our Services</p>
        <h2 className="subtitle mb-4">
          We Provide a Wide Range of Coding & Digital Marketing Services
        </h2>
        <ul className="services-columns-container">
          {data.allMarkdownRemark.edges.map(edge => {
            const { title, description, image, link } = edge.node.frontmatter
            const id = edge.node.id
            return (
              <li className="mb-4 box" key={id}>
                <Link to={link}>
                  <div className="count"></div>
                  <div className="icon">
                    <img src={`./images/services/${image}`} alt={title} />
                  </div>
                  <div className="title">
                    <h3>{title}</h3>
                  </div>
                  <div className="box-text">
                    <p>{description}</p>
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
