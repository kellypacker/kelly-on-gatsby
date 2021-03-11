import React from 'react';
import { PropTypes } from 'prop-types';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const ContainerStyled = styled.div`
    display: grid;
    grid-template-columns: 700px auto;
    /* grid-template-columns: repeat(auto-fill, minmax(900px, 1fr)); */
    grid-gap: 2rem 2rem;
    border-bottom: 1px solid #dbd9d8;
    margin-bottom: 40px;
    :last-of-type {
        border-bottom: none;
    }
`;

const Artwork = ({ data }) => {
    console.log(data);
    const { artwork } = data;
    console.log(artwork);
    return (
        <>
            <div className="flex justify-between items-baseline">
                <h2 className="text-3xl mt-4 mb-5 font-bold">
                    <span className="uppercase text-lg font-normal">
                        Series:
                    </span>{' '}
                    {artwork.artGroup.title}
                </h2>
                <div>
                    <Link
                        className="text-lg border border-gray-md py-1 px-2"
                        to={`/artwork/series/${artwork.artGroup.slug}`}
                    >
                        - All Artwork in Series -
                    </Link>
                    <Link
                        className="text-lg border border-gray-md py-1 px-2 ml-3"
                        to={`/artwork/series/${artwork.artGroup.slug}`}
                    >
                        Next
                    </Link>
                </div>
            </div>
            <ContainerStyled>
                <div>
                    <Img
                        className="artgroup-img"
                        fluid={artwork.image.fluid}
                        alt={artwork.title}
                    />
                </div>
                <div>
                    <h1 className="text-lg mb-3 font-bold">{artwork.title}</h1>
                    <p className="pb-0">
                        {artwork.height} x {artwork.width}"
                    </p>
                    <p className="pb-0">{artwork.medium.name}</p>
                    <p className="pb-0">{artwork.year}</p>
                </div>
            </ContainerStyled>
        </>
    );
};

// ArtGroup.propTypes = {
//     prop: PropTypes.
// };

export default Artwork;

export const query = graphql`
    query($slug: String!) {
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
