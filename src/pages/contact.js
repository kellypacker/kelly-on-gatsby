import React from 'react';
import { PropTypes } from 'prop-types';
import SEO from '../components/SEO';

const ContactPage = () => {
    console.log('contact');
    return (
        <>
            <SEO
                title="Contact"
                description="Contact Kelly Packer regarding general inquires, web development projects and artwork."
            />
            <h1 className="text-salmon font-serif">Contact</h1>
        </>
    );
};

// ContactPage.propTypes = {
//     prop: PropTypes.
// };

export default ContactPage;
