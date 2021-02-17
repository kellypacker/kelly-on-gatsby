import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'gatsby';

const Navigation = ({ }) => {
    return (
        <nav>
            <ul className="flex">
                <li><Link>Artwork</Link></li>
                <li><Link>Web Development</Link></li>
                <li><Link>Profile</Link></li>
                <li><Link>Contact</Link></li>
            </ul>
        </nav>
    );
};


export default Navigation;
