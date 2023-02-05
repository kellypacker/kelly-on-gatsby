import React from 'react';
import { PropTypes } from 'prop-types';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
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
            <h1 className="mt-4 mb-2 text-3xl">
                <span className="text-lg font-normal uppercase">Series:</span>{' '}
                {artGroup.title}
            </h1>
            <ContainerStyled className="pt-3">
                {artworks.map((artwork) => {
                    const image = getImage(artwork.image);
                    return (
                        <div key={artwork.id} className="relative">
                            {artwork.available && (
                                <div className="absolute top-0 right-0 z-10 px-2 py-1 text-gray-lighter bg-salmon">
                                    Available
                                </div>
                            )}
                            <Link to={`/artwork/${artwork.slug}`}>
                                <GatsbyImage
                                    image={image}
                                    alt={`Thumbnail: ${artwork.image.title}`}
                                />
                                <h3 className="py-2 text-lg text-center">
                                    {artwork.title}
                                </h3>
                            </Link>
                        </div>
                    );
                })}
            </ContainerStyled>
        </>
    );
};

// ArtGroup.propTypes = {
//     prop: PropTypes.
// };

export default ArtGroup;

export const query = graphql`
    query ($slug: String!) {
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
                        title
                        gatsbyImageData(
                            width: 800
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF]
                            quality: 80
                        )
                    }
                    available
                }
            }
        }
    }
`;
