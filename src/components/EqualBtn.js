import React, { PropTypes } from 'react';

const EqualBtn = ({ onClick }) => (
    <button onClick={ onClick }>=</button>
);

EqualBtn.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default EqualBtn
