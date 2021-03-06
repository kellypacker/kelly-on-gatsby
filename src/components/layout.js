import React from 'react';
import './layout.css';
import Navigation from './Navigation';
// https://fonts.google.com/specimen/EB+Garamond?query=garamond&preview.text_type=custom#standard-styles
// https://github.com/fontsource/fontsource
import '@fontsource/cormorant-garamond'; // Defaults to weight 400 with all styles included.
import Footer from './Footer';

export default function Layout({ children }) {
    return (
        <div className="container mx-auto px-3">
            <Navigation />
            {children}
            <Footer />
        </div>
    );
}
