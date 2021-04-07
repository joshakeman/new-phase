module.exports = {
  siteMetadata: {
    title: `New Phase Fitness`,
    description: `New Phase Fitness offers customized in-home or virtual personal training sessions and nutrition coaching for women. In-home personal training is available if you live in the Atlanta area. We have flexible programming options to fit your needs. Schedule a free consultation for more detailed information about our personal fitness programs.`,
    author: `@mynewphasefitness`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/npf_logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "azfe7mc7",
        dataset: "production",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
