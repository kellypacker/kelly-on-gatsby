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

const IndexPage = ({ data }) => {
    const posts = data.allContentfulBlog.nodes;
    console.log({ data });
    if (!posts) return null;
    console.log(posts);

    return (
        <ContainerStyled>
            {posts.map((post) => {
                console.log(post.image.fluid);
                return (
                    <div className="pt-4 pb-8" key={post.id}>
                        <h2 className="mb-2 mt-4">{post.title}</h2>
                        <ReactMarkdown className="mb-4">
                            {post.description.internal.content}
                        </ReactMarkdown>
                        <Img fluid={post.image.fluid} alt="Test" />
                    </div>
                );
            })}
        </ContainerStyled>
    );
};

export const query = graphql`
    query BlogPosts {
        allContentfulBlog {
            nodes {
                id
                title
                description {
                    internal {
                        content
                    }
                }
                image {
                    fluid(maxWidth: 600, quality: 90) {
                        ...GatsbyContentfulFluid
                    }
                }
            }
        }
    }
`;

export default IndexPage;
