import React from 'react';
import { PropTypes } from 'prop-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Img from 'gatsby-image';
import SEO from '../components/SEO';

const ContactPage = ({ data }) => {
    console.log('contact', data);
    const { about } = data;
    return (
        <>
            <SEO
                title="Profile"
                description="Profile of Kelly Packer, artist and web developer. Includes influences and artist statement."
            />
            <h1 className="text-3xl mt-4 mb-2">
                Artist <em>and</em> Web Developer
            </h1>
            <div className="flex">
                <Img fluid={about.profileImage.fixed} alt="Kelly Packer" />
                <div>
                    {documentToReactComponents(JSON.parse(about.body.raw))}
                </div>
            </div>
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
                fixed(width: 300, quality: 90) {
                    ...GatsbyContentfulFixed
                }
            }
        }
    }
`;

export default ContactPage;
