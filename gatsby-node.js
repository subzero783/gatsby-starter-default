/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions, graphql }) => {
  // const { createPage } = actions
  // createPage({
  //   path: "/using-dsg",
  //   component: require.resolve("./src/templates/using-dsg.js"),
  //   context: {},
  //   defer: true,
  // })
  const { data } = await graphql(`
    query MyQuery {
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "service" } } }
      ) {
        edges {
          node {
            frontmatter {
              link
            }
            id
          }
        }
      }
    }
  `)
  data.allMarkdownRemark.edges.forEach(edge => {
    const { link } = edge.node.frontmatter
    actions.createPage({
      path: `/services${link}`,
      component: require.resolve(`./src/templates/service.js`),
      context: { slug: link },
    })
  })
}
