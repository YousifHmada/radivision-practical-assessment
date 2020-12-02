import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';

function Button({ value, active, onClick }) {
  return (
    <button
      type="button"
      className={`btn btn-secondary ${active ? 'active' : ''}`}
      onClick={onClick}
    >
      {value + 1}
    </button>
  );
}

export default Button;

Button.propTypes = {
  value: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
};
