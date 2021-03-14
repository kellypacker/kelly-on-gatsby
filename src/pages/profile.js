import React from 'react';
import { PropTypes } from 'prop-types';
import SEO from '../components/SEO';

const ContactPage = () => {
    console.log('contact');
    return (
        <>
            <SEO
                title="Profile"
                description="Profile of Kelly Packer, artist and web developer. Includes influences and artist statement."
            />
            <h1 className="text-salmon font-serif">Profile</h1>
        </>
    );
};

// ContactPage.propTypes = {
//     prop: PropTypes.
// };

export default ContactPage;
