import React from 'react';
import './layout.css';
import Navigation from "./Navigation";
// https://fonts.google.com/specimen/EB+Garamond?query=garamond&preview.text_type=custom#standard-styles
// https://github.com/fontsource/fontsource
import "@fontsource/eb-garamond" // Defaults to weight 400 with all styles included.

export default function Layout({ children }) {
  return <div className="container mx-auto">
      <Navigation />
      {children}
    </div>
}