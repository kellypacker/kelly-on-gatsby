import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'gatsby';

const Navigation = ({}) => (
    <div className="flex justify-between items-center border-b border-gray-md py-2">
        <Link to="/" className="text-3xl ml-1">
            Kelly Packer
        </Link>
        <nav>
            <ul className="flex">
                <li>
                    <Link to="/artwork">Artwork</Link>
                </li>
                <li>
                    <Link to="/web-development">Web Development</Link>
                </li>
                <li>
                    <Link to="/profile"> Profile</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    </div>
);

export default Navigation;
