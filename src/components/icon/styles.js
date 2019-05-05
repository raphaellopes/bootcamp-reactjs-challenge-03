// vendors
import styled from 'styled-components';

// locals
import { colors } from '../../styles/variables';

export const IconStyle = styled.i`
  color: ${props => (props.color ? colors[props.color] : 'inherit')}
`;
