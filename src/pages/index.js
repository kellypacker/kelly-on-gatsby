import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import SEO from '../components/SEO';

const ContainerStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 1rem 2rem;
`;

const IndexPage = ({ data }) => {
    const posts = data.posts.nodes;
    if (!posts) return null;
    
    return (
        <ContainerStyled>
            <SEO title="Home" />
            {posts.map((post) => {
            console.log({post});
                const image = getImage(post.image);
                return (
                    <div className="pt-4 pb-8" key={post.id}>
                        <h2 className="mt-4 mb-2 text-3xl leading-8">
                            {post.title}
                        </h2>
                        <ReactMarkdown className="mb-4">
                            {post.description.internal.content}
                        </ReactMarkdown>
                        <GatsbyImage image={image} alt={post.image.title} />      
                    </div>
                );
            })}
        </ContainerStyled>
    );
};

export const query = graphql`
    query BlogPosts {
        posts: allContentfulBlog(sort: { fields: date, order: DESC }) {
            nodes {
                id
                title
                description {
                    internal {
                        content
                    }
                }
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

export default IndexPage;
