import React from 'react';
import { PropTypes } from 'prop-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';

const ProfileStyled = styled.div`
    display: grid;
    grid-template-columns: 300px minmax(auto, 700px);
    grid-gap: 2rem 2rem;
`;

const ImgContainer = styled.div`
    border: 1px solid #dbd9d8;
    padding: 3px;
`;

const ContactPage = ({ data }) => {
    const { about } = data;
    return (
        <>
            <SEO
                title="Profile"
                description="Profile of Kelly Packer, artist and web developer. Includes artist statement and background."
            />
            <h1 className="text-3xl mt-4 mb-2">
                Artist <em>and</em> Web Developer
            </h1>
            <ProfileStyled className="pb-6">
                <div>
                    <ImgContainer>
                        <Img
                            fluid={about.profileImage.fluid}
                            alt="Kelly Packer"
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
                fluid(maxWidth: 300, quality: 75) {
                    ...GatsbyContentfulFluid
                }
            }
        }
    }
`;

export default ContactPage;
