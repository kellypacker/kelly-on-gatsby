import React from 'react';
import { PropTypes } from 'prop-types';
import Layout from '../components/layout';

const ArtworkPage = () => {
    console.log('artwork');
    return (
        <Layout className="container">
            <h1 className="text-salmon font-serif">Artwork</h1>
        </Layout>
    );
};

// ArtworkPage.propTypes = {
//     prop: PropTypes.
// };

export default ArtworkPage;
