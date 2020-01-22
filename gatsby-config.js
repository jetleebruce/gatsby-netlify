/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "ONK Russia",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/`,
      },
    },

    {
      resolve: `gatsby-transformer-remark`,
    },

    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "plazaplaza.pw",
        // The protocol. This can be http or https.
        protocol: "http",
        hostingWPCOM: false,
        useACF: true,
      },
    },
  ],
}
