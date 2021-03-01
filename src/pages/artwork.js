import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const ArtworkContainerStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(300px, 1fr));
    grid-gap: 1rem 2rem;
    border-bottom: 1px solid #dbd9d8;
    :last-of-type {
        border-bottom: none;
    }
`;

const ImgContainer = styled.div`
    border: 1px solid #dbd9d8;
    padding: 3px;
`;

const ArtGroup = ({ artgroup }) => (
    <ArtworkContainerStyled className="py-5">
        <div>
            <ImgContainer>
                <Img
                    className="artgroup-img"
                    fluid={artgroup.image.fluid}
                    alt={artgroup.title}
                />
            </ImgContainer>
        </div>
        <div className="">
            <h2 className="text-salmon font-serif text-2xl font-bold pb-2">
                {artgroup.title}
            </h2>
            {artgroup.description &&
                documentToReactComponents(JSON.parse(artgroup.description.raw))}
            {artgroup.artistStatement && (
                <>
                    <h3 className="uppercase text-lg pt-3 font-bold pb-2">
                        Statement
                    </h3>
                    {documentToReactComponents(
                        JSON.parse(artgroup.artistStatement.raw)
                    )}
                </>
            )}
        </div>
    </ArtworkContainerStyled>
);

const ArtworkPage = ({ data }) => {
    const artGroups = data?.allContentfulArtGroups?.nodes;
    if (!artGroups) return null;
    console.log(artGroups);

    return (
        <>
            <h1 className="text-3xl mt-4 uppercase">
                Artwork <span className="italic lowercase">by</span> Series
            </h1>

            {artGroups.map((group) => (
                <ArtGroup artgroup={group} key={group.id} />
            ))}
        </>
    );
};

export const query = graphql`
    query {
        allContentfulArtGroups(sort: { fields: publishedAt, order: DESC }) {
            nodes {
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
