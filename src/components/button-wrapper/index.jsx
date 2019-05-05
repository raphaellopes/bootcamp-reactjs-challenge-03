// vendors
import React from 'react';
import { node } from 'prop-types';

// locals
import { ButtonWrapperStyle } from './styles';

const ButtonWrapper = ({ children }) => (
  <ButtonWrapperStyle>
    {children}
  </ButtonWrapperStyle>
);

ButtonWrapper.propTypes = {
  children: node.isRequired,
};

export default ButtonWrapper;
