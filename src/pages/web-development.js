import React from 'react';
import { PropTypes } from 'prop-types';
import SEO from '../components/SEO';

const WebDevelopmentPage = () => {
    console.log('');
    return (
        <div className="mb-5">
            <SEO
                title="Web Development"
                description="Kelly Packer is a web developer specializing in Javascript. Experienced with React."
            />
            <h1 className="text-3xl mt-4 mb-2">
                {'</>'} <em>Web</em> Development
            </h1>
            <p>
                I am a senior web developer at{' '}
                <a href="https://fostermade.co">Foster Made</a>
            </p>
            <p>
                I love to create beautiful, usable applications with Javascript
                and things like React, React Native, and HTML5 Canvas. I fell in
                love with code when I bought my first HTML book in 2003. I
                thought it was fascinating that you could build web sites by
                using Notepad and reading some DIY books. It's a profession for
                filled with self-taught, independent thinkers and I am proud to
                be a part of it.
            </p>
        </div>
    );
};

// WebDevelopmentPage.propTypes = {
//     prop: PropTypes.
// };

export default WebDevelopmentPage;
