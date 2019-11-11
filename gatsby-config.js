require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Makeup Island`,
    description: `E-commers website selling makeup`,
    author: `Hex-Zero`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-stripe`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Makeup-Island`,
        short_name: `Makeup`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/fav.png`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/*`],
      },
    },
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ["Sku"],
        secretKey: `${process.env.GATSBY_STRIPE_RESTRICKTED}`,
        downloadFiles: true,
      },
    },
    {
      resolve: `gatsby-source-mongodb`,
      options: {
        connectionString: `${process.env.GATSBY_DATABASEMO}`,
        dbName: `MakeupIsland`,
        collection: `Products`,
        clientOptions: { useUnifiedTopology: true, useNewUrlParser: true },
      },
      map: {
        posts: { description: `text/markdown` },
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/products`,
      },
    },
  ],
}
