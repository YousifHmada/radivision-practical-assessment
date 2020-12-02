import React from 'react';
import './Image.css';
import PropTypes from 'prop-types';

function Image({ src, onClick }) {
  return (
    <img src={src} onClick={onClick} alt={src} />
  );
}

export default Image;

Image.propTypes = {
  src: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
