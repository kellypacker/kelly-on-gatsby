module.exports = {
  siteMetadata: {
    title: "kellypacker.com",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "OcpUWw68vuomibmHZnCS24CgwlikdK0-V6Pl7sEyuOc",
        spaceId: "uoo8xrj2ps6p",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
