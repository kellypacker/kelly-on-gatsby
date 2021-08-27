import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavStyled = styled.nav`
    a[aria-current='page'] {
        color: #78736f;
        border-bottom: 1px solid #f98b7e;
        background-color: #f3f3f3;
        span {
            border-right: 15px solid rgba(214, 188, 63, 0.2);
        }
    }
`;

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

const Navigation = ({}) => {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    const handleMobileNavToggle = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
        document.body.style.overflow = !isMobileNavOpen ? 'hidden' : 'auto';
    };
    return (
        <>
            <div className="block relative main-nav-mobile md:hidden">
                <Link className="main-nav-mobile__artwork" to="/artwork">
                    <ArtworkBgStyled>Artwork</ArtworkBgStyled>
                </Link>
                {isMobileNavOpen && (
                    <button
                        type="button"
                        onClick={handleMobileNavToggle}
                        className="text-lg md:hidden"
                    >
                        Close
                    </button>
                )}
                {!isMobileNavOpen && (
                    <button
                        type="button"
                        onClick={handleMobileNavToggle}
                        className="text-lg md:hidden"
                    >
                        More
                    </button>
                )}
            </div>
            <div className="main-header flex justify-between items-center border-b border-gray-md pb-2 pt-4">
                <Link
                    to="/"
                    className="text-3xl ml-1"
                    style={{ lineHeight: 1.2 }}
                >
                    Kelly Packer
                </Link>

                <div
                    className={`${
                        isMobileNavOpen ? 'block' : 'hidden'
                    } md:block`}
                >
                    <NavStyled>
                        <ul>
                            <li>
                                <Link
                                    to="/artwork"
                                    onClick={handleMobileNavToggle}
                                >
                                    <ArtworkBgStyled>Artwork</ArtworkBgStyled>
                                </Link>
                            </li>
                            <li>
                                <a href="https://www.etsy.com/shop/kellypacker/">
                                    <ArtworkBgStyled>Store</ArtworkBgStyled>
                                </a>
                            </li>
                            <li>
                                <Link
                                    to="/web-development"
                                    onClick={handleMobileNavToggle}
                                >
                                    <ArtworkBgStyled>
                                        Web Development
                                    </ArtworkBgStyled>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/profile"
                                    onClick={handleMobileNavToggle}
                                >
                                    <ArtworkBgStyled>Profile</ArtworkBgStyled>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    onClick={handleMobileNavToggle}
                                >
                                    <ArtworkBgStyled>Contact</ArtworkBgStyled>
                                </Link>
                            </li>
                        </ul>
                    </NavStyled>
                </div>
            </div>
        </>
    );
};

export default Navigation;
