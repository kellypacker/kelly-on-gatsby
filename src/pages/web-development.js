import React from 'react';
import { PropTypes } from 'prop-types';
import SEO from '../components/SEO';

const WebDevelopmentPage = () => {
    console.log('web');
    return (
        <>
            <SEO
                title="Web Development"
                description="Kelly Packer is a web developer specializing in Javascript. Experienced with React."
            />
            <h1 className="text-salmon font-serif">WEb</h1>
        </>
    );
};

// WebDevelopmentPage.propTypes = {
//     prop: PropTypes.
// };

export default WebDevelopmentPage;
