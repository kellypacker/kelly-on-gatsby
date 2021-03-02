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
    console.log(data);
    data.artGroups.nodes.forEach((artGroup) => {
        console.log(artGroup.slug);
        actions.createPage({
            path: `artwork/series/${artGroup.slug}`,
            component: artGroupTemplate,
            context: {
                slug: artGroup.slug,
            },
        });
    });
};

exports.createPages = async (params) => {
    await turnArtGroupsIntoPages(params);
};
