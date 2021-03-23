import React from 'react';
import { PropTypes } from 'prop-types';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { mediaQueries } from '../helpers/media-queries';
import SEO from '../components/SEO';

const HeaderStyles = styled.div`
    flex-flow: row wrap;
    & > * {
        flex: 1 100%;
        @media ${mediaQueries.md} {
            flex: 2;
        }
    }
    .pagination {
        a:hover {
            background-color: #f3f3f3;
        }
        a[disabled] {
            pointer-events: none;
            opacity: 0.3;
        }
    }
`;

const Artwork = ({ data }) => {
    const { artwork } = data;

    const { artworks } = data.artworks.nodes[0];

    const currentIndex = artworks.findIndex((a) => a.id === artwork.id);

    const prevArtwork = artworks[currentIndex - 1];
    const nextArtwork = artworks[currentIndex + 1];

    return (
        <>
            <SEO
                title={`${artwork.title}`}
                description={`Artwork: ${artwork.title} ${artwork.medium.name} ${artwork.year}`}
            />
            <HeaderStyles
                className="flex justify-between items-baseline flex-col md:flex-row mb-4"
                style={{ flexFlow: 'row wrap' }}
            >
                <h2 className="text-xl md:text-3xl mt-4 mb-5 text-center md:text-left">
                    <span className="uppercase text-sm md:text-lg">
                        Series:
                    </span>{' '}
                    {artwork.artGroup.title}
                </h2>
                <div className="pagination text-center md:text-right">
                    <Link
                        title="Prev Page"
                        disabled={!prevArtwork}
                        className="text-md md:text-lg border border-gray-md py-1 px-2 mr-3"
                        to={prevArtwork ? `/artwork/${prevArtwork.slug}` : ''}
                    >
                        {'<-'} Prev
                    </Link>
                    <Link
                        className="text-md md:text-lg border border-gray-md py-1 px-2"
                        to={`/artwork/series/${artwork.artGroup.slug}`}
                    >
                        - All Artwork in Series -
                    </Link>
                    <Link
                        title="Next Page"
                        disabled={!nextArtwork}
                        className="text-md md:text-lg border border-gray-md py-1 px-2 ml-3"
                        to={nextArtwork ? `/artwork/${nextArtwork.slug}` : ''}
                    >
                        Next ->
                    </Link>
                </div>
            </HeaderStyles>

            <div className="flex flex-col md:flex-row pb-8">
                <div className="w-full md:w-2/3">
                    <Img
                        className="artgroup-img"
                        fluid={artwork.image.fluid}
                        alt={artwork.title}
                    />
                </div>

                <div className="w-full md:w-1/3 pl-0 md:pl-6 text-center md:text-left">
                    <h1 className="text-xl mb-2 pt-3 md:pt-0">
                        {artwork.title}
                    </h1>
                    {artwork.longTitle &&
                        documentToReactComponents(
                            JSON.parse(artwork.longTitle.raw)
                        )}
                    <p className="pb-0">
                        {artwork.height}" x {artwork.width}"
                    </p>
                    <p className="pb-0">{artwork.medium.name}</p>
                    <p className="pb-0">{artwork.year}</p>
                    {artwork.available && artwork.price && `$${artwork.price}`}
                    {artwork.available && (
                        <div>
                            <a
                                href={`mailto:kelly@kellypacker.com?subject=Artwork%20inquiry%3A%20${artwork.title}&body=${artwork.title}%29%0Ahttps%3A%2F%2Fwww.kellypacker.com%2Fartwork%2F${artwork.slug}`}
                            >
                                Inquire about artwork
                            </a>
                        </div>
                    )}
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
            longTitle {
                raw
            }
            height
            width
            medium {
                name
            }
            year
            image {
                fluid(maxWidth: 900, quality: 75) {
                    ...GatsbyContentfulFluid
                }
            }
            # framed
            available
            price
            artGroup {
                title
                slug
            }
        }
    }
`;
