// vendors
import React from 'react';
import { string } from 'prop-types';

// locals
import { IconStyle } from './styles';

const Icon = ({ name, ...props }) => (
  <IconStyle className={`fa fa-${name}`} {...props} />
);

Icon.propTypes = {
  name: string.isRequired,
};

export default Icon;
