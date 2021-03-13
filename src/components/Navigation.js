import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

const ArtworkBgStyled = styled.span`
    /* background-color: #d6bc3f; */
    display: inline-block;
    padding: 3px 0;
    border-bottom: 1px solid transparent;
    border-right: 15px solid transparent;
    border-left: 1px solid transparent;
    margin-left: -5px;
    position: relative;
    &:after {
        content: ' ';
        position: absolute;
        top: 8px;
        right: -9px;
        bottom: 5px;
        z-index: 10;
        border-left: 3px dotted #97c9bd;
    }
    &:hover {
        color: #78736f;
        /* background-color: rgba(214, 188, 63, 0.2); */
        border-right: 15px solid rgba(214, 188, 63, 0.2);
    }
`;
const WebBgStyled = styled.span`
    /* background-color: #d6bc3f; */
    display: inline-block;
    padding: 3px 0;
    border-bottom: 1px solid transparent;
    &:hover {
        color: #78736f;
        /* background-color: rgba(214, 188, 63, 0.2); */
        border-bottom: 1px solid #97c9bd;
    }
`;

const StoreBgStyled = styled.span`
    padding-left: 5px;
    padding-right: 5px;
    &:hover {
        background-color: rgba(214, 188, 63, 0.2);
    }
`;

const Navigation = ({}) => (
    <div className="flex justify-between items-center border-b border-gray-md pb-2 pt-6">
        <Link to="/" className="text-3xl ml-1" style={{ lineHeight: 1.2 }}>
            Kelly Packer
        </Link>
        <nav>
            <ul className="flex">
                <li>
                    <Link to="/artwork">
                        <ArtworkBgStyled>Artwork</ArtworkBgStyled>
                    </Link>
                </li>
                <li>
                    <a href="https://www.etsy.com/shop/kellypacker/">
                        <ArtworkBgStyled>Store</ArtworkBgStyled>
                    </a>
                </li>
                <li>
                    <Link to="/web-development">
                        <ArtworkBgStyled>Web Development</ArtworkBgStyled>
                    </Link>
                </li>
                <li>
                    <Link to="/profile">
                        <ArtworkBgStyled>Profile</ArtworkBgStyled>
                    </Link>
                </li>
                <li>
                    <Link to="/contact">
                        <ArtworkBgStyled>Contact</ArtworkBgStyled>
                    </Link>
                </li>
            </ul>
        </nav>
    </div>
);

export default Navigation;
