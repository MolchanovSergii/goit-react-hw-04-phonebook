import React from 'react';
import PropTypes from 'prop-types';
import { StyledInput } from '../ContactForms/ContactForms.styled';

const Filter = ({ value, onChange }) => {
  return (
    <label>
      Find contacts by name
      <StyledInput type="text" value={value} onChange={onChange} />
    </label>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
