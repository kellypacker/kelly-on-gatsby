import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faInstagram,
    faTwitter,
    faGithub,
    faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="flex flex-col md:flex-row md:justify-between items-baseline border-t border-gray-md py-3">
            <ul className="flex items-start">
                <li>
                    <a
                        href="https://www.etsy.com/shop/kellypacker/"
                        className="text-xl"
                    >
                        Etsy Shop
                    </a>
                </li>
                <li>
                    <a
                        href="http://instagram.com/kellypacker"
                        className="text-2xl"
                    >
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </li>
                <li>
                    <a
                        href="http://twitter.com/kellypacker"
                        className="text-2xl"
                    >
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/kellypacker"
                        className="text-2xl"
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com/in/kellypacker/"
                        className="text-2xl"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </li>
            </ul>
            <p className="mt-2 md:mt-0">
                © 2003-{currentYear} Kelly Packer. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
