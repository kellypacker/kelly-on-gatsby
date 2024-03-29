import { graphql, Link, useStaticQuery } from 'gatsby';
import * as React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { mediaQueries } from '../helpers/media-queries';
import SEO from '../components/SEO';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const ArtworkContainerStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 600px));
    grid-gap: 1rem 2rem;
    border-bottom: 1px solid #dbd9d8;
    :last-of-type {
        border-bottom: none;
    }
    @media ${mediaQueries.md} {
        grid-template-columns: 300px minmax(auto, 700px);
        /* grid-template-columns: repeat(2, minmax(200px, 300px)); */
    }
`;

const ImgContainer = styled.div`
    border: 1px solid #dbd9d8;
    padding: 3px;
`;

const ArtGroup = ({ artGroup }) => {
    const image = getImage(artGroup.image);
    return (
        <ArtworkContainerStyled className="py-8">
            <div>
                <Link to={`/artwork/series/${artGroup.slug}`}>
                    <ImgContainer>
                        <GatsbyImage
                            className="artgroup-img"
                            image={image}
                            alt={`${artGroup.image.title}`}
                        />
                    </ImgContainer>
                </Link>
            </div>
            <div className="">
                <h2 className="pb-2 font-serif text-2xl font-bold text-salmon">
                    <Link to={`/artwork/series/${artGroup.slug}`}>
                        {artGroup.title}
                    </Link>
                </h2>
                {artGroup.description &&
                    documentToReactComponents(
                        JSON.parse(artGroup.description.raw)
                    )}
                {artGroup.artistStatement && (
                    <>
                        <h3 className="pt-3 pb-2 text-lg font-bold uppercase">
                            Statement
                        </h3>
                        {documentToReactComponents(
                            JSON.parse(artGroup.artistStatement.raw)
                        )}
                    </>
                )}
            </div>
        </ArtworkContainerStyled>
    );
};

const ArtworkPage = ({ data }) => {
    const artGroups = data?.artGroups?.nodes;
    if (!artGroups) return null;

    return (
        <>
            <SEO
                title="Artwork by Series"
                description="Artwork by listed by series. Includes artist statements and images."
            />
            <h1 className="mt-4 text-3xl uppercase">
                Artwork <span className="italic lowercase">by</span> Series
            </h1>

            {artGroups.map((group) => (
                <ArtGroup artGroup={group} key={group.id} />
            ))}
        </>
    );
};

export const query = graphql`
    query {
        artGroups: allContentfulArtGroups(
            sort: { fields: publishedAt, order: DESC }
        ) {
            nodes {
                slug
                description {
                    raw
                }
                artistStatement {
                    raw
                }
                title
                id
                image {
                    title
                    gatsbyImageData(
                        width: 600
                        placeholder: BLURRED
                        formats: [AUTO, WEBP, AVIF]
                        quality: 80
                    )
                }
            }
        }
    }
`;

export default ArtworkPage;
