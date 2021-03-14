import { graphql, Link, useStaticQuery } from 'gatsby';
import * as React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { mediaQueries } from '../helpers/media-queries';
import SEO from '../components/SEO';

const ArtworkContainerStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 600px));
    grid-gap: 1rem 2rem;
    border-bottom: 1px solid #dbd9d8;
    :last-of-type {
        border-bottom: none;
    }
    @media ${mediaQueries.md} {
        grid-template-columns: repeat(2, minmax(300px, 600px));
    }
`;

const ImgContainer = styled.div`
    border: 1px solid #dbd9d8;
    padding: 3px;
`;

const ArtGroup = ({ artGroup }) => {
    console.log('');
    return (
        <ArtworkContainerStyled className="py-5">
            <div>
                <Link to={`/artwork/series/${artGroup.slug}`}>
                    <ImgContainer>
                        <Img
                            className="artgroup-img"
                            fluid={artGroup.image.fluid}
                            alt={artGroup.title}
                        />
                    </ImgContainer>
                </Link>
            </div>
            <div className="">
                <h2 className="text-salmon font-serif text-2xl font-bold pb-2">
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
                        <h3 className="uppercase text-lg pt-3 font-bold pb-2">
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
            <h1 className="text-3xl mt-4 uppercase">
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
                    fluid(maxWidth: 600, quality: 90) {
                        ...GatsbyContentfulFluid
                    }
                }
            }
        }
    }
`;

export default ArtworkPage;
