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
    `gatsby-plugin-typescript`,
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
      resolve: `gatsby-source-mongodb`,
      options: {
        connectionString: `${process.env.GATSBY_DATABASE}`,
        dbName: `MakeupIsland`,
        collection: `Products`,
        map: {
          posts: { description: `text/markdown` },
        },
        clientOptions: { useUnifiedTopology: true, useNewUrlParser: true },
      },
    },
  ],
}
