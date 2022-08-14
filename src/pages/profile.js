import React from 'react';
import { PropTypes } from 'prop-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';
import { mediaQueries } from '../helpers/media-queries';

const ProfileStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 600px));
    grid-gap: 2rem 2rem;
    @media ${mediaQueries.md} {
        grid-template-columns: 300px minmax(auto, 700px);
    }
`;

const ImgContainer = styled.div`
    border: 1px solid #dbd9d8;
    padding: 3px;
`;

const ContactPage = ({ data }) => {
    const { about } = data;
    const image = getImage(about.profileImage);
    return (
        <>
            <SEO
                title="Profile"
                description="Profile of Kelly Packer, artist and web developer. Includes artist statement and background."
            />
            <h1 className="mt-4 mb-2 text-3xl">
                Artist <em>and</em> Web Developer
            </h1>
            <ProfileStyled className="pb-6">
                <div>
                    <ImgContainer>
                        <GatsbyImage
                            image={image}
                            alt={about.profileImage.title}
                        />
                    </ImgContainer>
                </div>
                <div className="cms-content cms-content--profile">
                    {documentToReactComponents(JSON.parse(about.body.raw))}
                </div>
            </ProfileStyled>
        </>
    );
};

// ContactPage.propTypes = {
//     prop: PropTypes.
// };

export const query = graphql`
    query {
        about: contentfulAbout {
            id
            body {
                raw
            }
            profileImage {
                gatsbyImageData(
                    width: 300
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                    quality: 80
                )
            }
        }
    }
`;

export default ContactPage;
