import React from 'react';
import { PropTypes } from 'prop-types';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import SEO from '../components/SEO';

const ContainerStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 2rem 2rem;
    border-bottom: 1px solid #dbd9d8;
    margin-bottom: 40px;
    :last-of-type {
        border-bottom: none;
    }
`;

const ArtGroup = ({ data }) => {
    const { artGroup } = data;
    const { artworks } = data.artworks.nodes[0];
    return (
        <>
            <SEO
                title={`Series: ${artGroup.title}`}
                description={`Artwork for the series: ${artGroup.title}`}
            />
            <h1 className="text-3xl mt-4 mb-2">
                <span className="uppercase text-lg font-normal">Series:</span>{' '}
                {artGroup.title}
            </h1>
            <ContainerStyled className="pt-3">
                {artworks.map((artwork) => (
                    <div key={artwork.id}>
                        <Link to={`/artwork/${artwork.slug}`}>
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
        artworks: allContentfulArtworkOrder(
            filter: { artGroup: { slug: { eq: $slug } } }
        ) {
            nodes {
                artworks {
                    id
                    slug
                    title
                    image {
                        fluid(maxWidth: 300, quality: 80) {
                            ...GatsbyContentfulFluid
                        }
                    }
                }
            }
        }
    }
`;
