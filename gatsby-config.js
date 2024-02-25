/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Developer Gus Blog`,
    description: `Web Development and Search Engine Optimization by Unleashing Digital Brilliance with Developer Gus. Navigating the World of Web Design, Development and Beyond. Empowering Your Business with SEO and Google Ads Mastery.`,
    author: `Developer Gus`,
    siteUrl: `https://developergus.com/`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `service`,
        path: `${__dirname}/content/service`,
      },
      __key: "service",
    },
    // {
    //   resolve: `gatsby-transformer-yaml`,
    //   options: {
    //     typeName: `Service`,
    //   },
    // },
    {
      resolve: `gatsby-transformer-remark`,
      options: {},
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#9977f6`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#9977f6`,
        display: `minimal-ui`,
        icon: `./static/images/logos/developer-gus-logo-white.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `roboto\: 400, 500, 700`,
          `rubik\: 400, 500, 600, 700`,
          `syne\: 400, 500, 600, 700`,
          `source sans pro\:300,400,400i,700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          camelCase: false,
        },
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        // host: 'https://www.example.com',
        // sitemap: 'https://www.example.com/sitemap.xml',
        env: {
          development: {
            policy: [{ userAgent: "*", disallow: ["/"] }],
          },
          production: {
            policy: [{ userAgent: "*", disallow: ["/"] }],
          },
        },
      },
    },
  ],
}
