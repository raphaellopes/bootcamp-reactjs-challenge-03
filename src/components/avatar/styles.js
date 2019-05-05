// vendors
import styled from 'styled-components';

// locals
import { colors } from '../../styles/variables';

export const AvatarStyle = styled.img`
  border-radius: 100%;
  width: 48px;
  height: 48px;
  border: ${props => (props.withBorder ? `5px solid ${colors.secondary}` : 0)}
`;
