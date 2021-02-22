import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import Img from 'gatsby-image';

import { GatsbyImage, getImage } from 'gatsby-plugin-image';
// import { GatsbyImage } from 'gatsby-plugin-image/compat';

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
                            fluid(maxWidth: 125, quality: 90) {
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
        <div className="grid grid-flow-col grid-cols-2 auto-cols-auto gap-5">
            {posts.allContentfulBlog.edges.map((edge) => {
                const image = getImage(edge.node.image);
                console.log(edge.node.image.fluid);
                return (
                    <div className="pb-8 border-b border-gray-light md:border-transparent">
                        <h2 className="mb-2 mt-4">{edge.node.title}</h2>
                        <ReactMarkdown>
                            {edge.node.description.internal.content}
                        </ReactMarkdown>
                        <Img fluid={edge.node.image.fluid} alt="Test" />
                    </div>
                );
            })}
        </div>
    );
};

export default IndexPage;
