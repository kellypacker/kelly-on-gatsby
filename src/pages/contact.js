import React from 'react';
import { PropTypes } from 'prop-types';
import Layout from '../components/layout';

const ContactPage = () => {
    console.log('contact');
    return (
        <Layout className="container">
            <h1 className="text-salmon font-serif">Contact</h1>
        </Layout>
    );
};

// ContactPage.propTypes = {
//     prop: PropTypes.
// };

export default ContactPage;
