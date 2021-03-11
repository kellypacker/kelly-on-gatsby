const path = require('path');

const turnArtGroupsIntoPages = async ({ graphql, actions }) => {
    const artGroupTemplate = path.resolve('./src/templates/ArtGroup.js');
    const { data } = await graphql(`
        query {
            artGroups: allContentfulArtGroups {
                nodes {
                    slug
                    id
                }
            }
        }
    `);
    data.artGroups.nodes.forEach((artGroup) => {
        actions.createPage({
            path: `artwork/series/${artGroup.slug}`,
            component: artGroupTemplate,
            context: {
                slug: artGroup.slug,
            },
        });
    });
};

const turnArtworksIntoPages = async ({ graphql, actions }) => {
    const artworkTemplate = path.resolve('./src/templates/Artwork.js');
    const { data } = await graphql(`
        query {
            artworks: allContentfulArtwork {
                nodes {
                    slug
                    id
                }
            }
        }
    `);
    data.artworks.nodes.forEach((artwork) => {
        actions.createPage({
            path: `artwork/${artwork.slug}`,
            component: artworkTemplate,
            context: {
                slug: artwork.slug,
            },
        });
    });
};

exports.createPages = async (params) => {
    await Promise.all([
        turnArtGroupsIntoPages(params),
        turnArtworksIntoPages(params),
    ]);
};
