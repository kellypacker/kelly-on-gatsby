import React from 'react';
import { PropTypes } from 'prop-types';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const PaginationStyles = styled.div`
    a:hover {
        background-color: #f3f3f3;
    }
    & > * {
        &[disabled] {
            pointer-events: none;
            opacity: 0.3;
        }
    }
`;

const Artwork = ({ data }) => {
    console.log(data);
    const { artwork } = data;
    console.log(artwork);

    const { artworks } = data.artworks.nodes[0];

    const currentIndex = artworks.findIndex((a) => a.id === artwork.id);
    console.log(currentIndex);

    const prevArtwork = artworks[currentIndex - 1];
    const nextArtwork = artworks[currentIndex + 1];

    console.log(prevArtwork, nextArtwork, artworks.length, currentIndex);

    return (
        <>
            <div className="flex justify-between items-baseline">
                <h2 className="text-3xl mt-4 mb-5">
                    <span className="uppercase text-lg font-normal">
                        Series:
                    </span>{' '}
                    {artwork.artGroup.title}
                </h2>
                <PaginationStyles>
                    <Link
                        title="Prev Page"
                        disabled={!prevArtwork}
                        className="text-lg border border-gray-md py-1 px-2 mr-3"
                        to={prevArtwork ? `/artwork/${prevArtwork.slug}` : ''}
                    >
                        {'<-'} Prev
                    </Link>
                    <Link
                        className="text-lg border border-gray-md py-1 px-2"
                        to={`/artwork/series/${artwork.artGroup.slug}`}
                    >
                        - All Artwork in Series -
                    </Link>
                    <Link
                        title="Next Page"
                        disabled={!nextArtwork}
                        className="text-lg border border-gray-md py-1 px-2 ml-3"
                        to={nextArtwork ? `/artwork/${nextArtwork.slug}` : ''}
                    >
                        Next ->
                    </Link>
                </PaginationStyles>
            </div>

            <div className="flex flex-col md:flex-row pb-6">
                <div className="w-full md:w-2/3">
                    <Img
                        className="artgroup-img"
                        fluid={artwork.image.fluid}
                        alt={artwork.title}
                    />
                </div>

                <div className="w-full md:w-1/3 pl-0 md:pl-6">
                    <h1 className="text-xl mb-3 pt-3 md:pt-0">
                        {artwork.title}
                    </h1>
                    <p className="pb-0">
                        {artwork.height} x {artwork.width}"
                    </p>
                    <p className="pb-0">{artwork.medium.name}</p>
                    <p className="pb-0">{artwork.year}</p>
                </div>
            </div>
        </>
    );
};

// ArtGroup.propTypes = {
//     prop: PropTypes.
// };

export default Artwork;

export const query = graphql`
    query($slug: String!, $artGroupSlug: String!) {
        artworks: allContentfulArtworkOrder(
            filter: { artGroup: { slug: { eq: $artGroupSlug } } }
        ) {
            nodes {
                artworks {
                    id
                    slug
                }
            }
        }
        artwork: contentfulArtwork(slug: { eq: $slug }) {
            id
            slug
            title
            height
            width
            medium {
                name
            }
            year
            image {
                fluid(maxWidth: 900, quality: 90) {
                    ...GatsbyContentfulFluid
                }
            }
            artGroup {
                title
                slug
            }
        }
    }
`;
