// vendors
import React from 'react';
import { number } from 'prop-types';

import { AvatarStyle } from './styles';

const Avatar = ({ userId, ...props }) => (
  <AvatarStyle
    src={`https://avatars2.githubusercontent.com/u/${userId}?v=4`}
    {...props}
  />
);

Avatar.propTypes = {
  userId: number.isRequired,
};

export default Avatar;
