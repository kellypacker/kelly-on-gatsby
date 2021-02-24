import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import Img from 'gatsby-image';

import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
// import { GatsbyImage } from 'gatsby-plugin-image/compat';

const ContainerStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 1rem 2rem;
`;

const IndexPage = () => {
    const posts = useStaticQuery(graphql`
        query BlogPosts {
            allContentfulBlog {
                edges {
                    node {
                        title
                        description {
                            internal {
                                content
                            }
                        }
                        # image {
                        #     gatsbyImageData(layout: FULL_WIDTH)
                        # }
                        image {
                            fluid(maxWidth: 600, quality: 90) {
                                # srcSet
                                ...GatsbyContentfulFluid
                            }
                        }
                    }
                }
            }
        }
    `);

    if (!posts.allContentfulBlog.edges) return null;
    console.log(posts.allContentfulBlog.edges);

    return (
        <ContainerStyled>
            {posts.allContentfulBlog.edges.map((edge) => {
                const image = getImage(edge.node.image);
                console.log(edge.node.image.fluid);
                return (
                    <div className="pt-4 pb-8">
                        <h2 className="mb-2 mt-4">{edge.node.title}</h2>
                        <ReactMarkdown className="mb-4">
                            {edge.node.description.internal.content}
                        </ReactMarkdown>
                        <Img fluid={edge.node.image.fluid} alt="Test" />
                    </div>
                );
            })}
        </ContainerStyled>
    );
};

export default IndexPage;
