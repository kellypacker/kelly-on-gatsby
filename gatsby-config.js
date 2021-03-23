require('dotenv').config();

module.exports = {
    siteMetadata: {
        title: 'Kelly Packer - Artist & Web Developer',
        description:
            'Kelly Packer is an artist and web developer. Features a portfolio of her contemporary abstract artwork. Includes web development projects.',
        siteUrl: process.env.SITE_URL,
    },
    plugins: [
        {
            resolve: 'gatsby-source-contentful',
            options: {
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                // host: `preview.contentful.com`,
            },
        },
        `gatsby-plugin-fontawesome-css`,
        `gatsby-plugin-postcss`,
        'gatsby-plugin-styled-components',
        'gatsby-plugin-sharp',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-image',
        'gatsby-plugin-sharp',
        'gatsby-plugin-sitemap',
        'gatsby-transformer-sharp',
        // `gatsby-plugin-sass`,
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/images/',
            },
            __key: 'images',
        },
    ],
};
