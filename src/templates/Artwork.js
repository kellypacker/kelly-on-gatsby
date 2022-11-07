import React from 'react';
import { PropTypes } from 'prop-types';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';

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
    const image = getImage(artwork.image);

    return (
        <>
            <SEO
                title={`${artwork.title}`}
                description={`Artwork: ${artwork.title} ${artwork.medium.name} ${artwork.year}`}
            />
            <HeaderStyles
                className="flex flex-col items-baseline justify-between mb-4 md:flex-row"
                style={{ flexFlow: 'row wrap' }}
            >
                <h2 className="mt-4 mb-5 text-xl text-center md:text-3xl md:text-left">
                    <span className="text-sm uppercase md:text-lg">
                        Series:
                    </span>{' '}
                    {artwork.artGroup.title}
                </h2>
                <div className="text-center pagination md:text-right">
                    <Link
                        title="Prev Page"
                        disabled={!prevArtwork}
                        className="py-1 pl-1 pr-2 mr-3 border text-md md:text-lg border-gray-md"
                        to={prevArtwork ? `/artwork/${prevArtwork.slug}` : ''}
                    >
                        <ChevronLeftIcon className="inline w-4 h-4" /> Prev
                    </Link>
                    <Link
                        className="px-2 py-1 border text-md md:text-lg border-gray-md"
                        to={`/artwork/series/${artwork.artGroup.slug}`}
                    >
                        - All Artwork in Series -
                    </Link>
                    <Link
                        title="Next Page"
                        disabled={!nextArtwork}
                        className="py-1 pl-2 pr-1 ml-3 border text-md md:text-lg border-gray-md"
                        to={nextArtwork ? `/artwork/${nextArtwork.slug}` : ''}
                    >
                        Next <ChevronRightIcon className="inline w-4 h-4" />
                    </Link>
                </div>
            </HeaderStyles>

            <div className="flex flex-col pb-8 md:flex-row">
                <div className="w-full md:w-2/3">
                    <GatsbyImage
                        className="artgroup-img"
                        image={image}
                        alt={artwork.image.title}
                    />
                </div>

                <div className="w-full pl-0 text-center md:w-1/3 md:pl-6 md:text-left">
                    <h1 className="pt-3 mb-2 text-xl md:pt-0">
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
                    {artwork.available && artwork.linkToBuy && (
                        <div className="mt-2">
                            <a href={artwork.linkToBuy}>Available in my shop</a>
                        </div>
                    )}
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
    query ($slug: String!, $artGroupSlug: String!) {
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
                gatsbyImageData(
                    width: 1800
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                    quality: 80
                )
            }
            # framed
            linkToBuy
            available
            price
            artGroup {
                title
                slug
            }
        }
    }
`;
