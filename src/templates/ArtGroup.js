import React from 'react';
import { PropTypes } from 'prop-types';
import { graphql } from 'gatsby';

const ArtGroup = ({ data }) => {
    console.log(data);
    const { artGroup } = data;
    console.log(artGroup);
    return (
        <h1 className="text-3xl mt-4 font-bold">
            <span className="uppercase text-lg font-normal">Series:</span>{' '}
            {artGroup.title}
        </h1>
    );
};

// ArtGroup.propTypes = {
//     prop: PropTypes.
// };

export default ArtGroup;

export const query = graphql`
    query($slug: String!) {
        artGroup: contentfulArtGroups(slug: { eq: $slug }) {
            title
        }
    }
`;
