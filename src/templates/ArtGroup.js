import React from 'react';
import { PropTypes } from 'prop-types';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const ContainerStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(300px, 1fr));
    grid-gap: 1rem 2rem;
    border-bottom: 1px solid #dbd9d8;
    :last-of-type {
        border-bottom: none;
    }
`;

const ArtGroup = ({ data }) => {
    console.log(data);
    const { artGroup, artworks } = data;
    console.log(artGroup);
    return (
        <>
            <h1 className="text-3xl mt-4 mb-2 font-bold">
                <span className="uppercase text-lg font-normal">Series:</span>{' '}
                {artGroup.title}
            </h1>
            <ContainerStyled>
                {artworks.nodes.map((artwork) => (
                    <div key={artwork.id}>
                        <Link
                            to={`/artwork/series/${artGroup.slug}/${artwork.slug}`}
                        >
                            <Img
                                fluid={artwork.image.fluid}
                                alt={artwork.title}
                            />
                            <h3 className="text-center py-2">
                                {artwork.title}
                            </h3>
                        </Link>
                    </div>
                ))}
            </ContainerStyled>
        </>
    );
};

// ArtGroup.propTypes = {
//     prop: PropTypes.
// };

export default ArtGroup;

export const query = graphql`
    query($slug: String!) {
        artGroup: contentfulArtGroups(slug: { eq: $slug }) {
            title
            slug
        }
        artworks: allContentfulArtwork(
            filter: { artGroup: { slug: { eq: $slug } } }
        ) {
            nodes {
                id
                slug
                title
                image {
                    fluid(maxWidth: 600, quality: 90) {
                        ...GatsbyContentfulFluid
                    }
                }
            }
        }
    }
`;
