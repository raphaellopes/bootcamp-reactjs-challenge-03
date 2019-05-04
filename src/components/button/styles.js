import styled from 'styled-components';
import { colors, borderRadius } from '../../styles/variables';

export const ButtonStyle = styled.button`
  border: 0;
  padding: 10px 15px;
  background-color: ${props => colors[props.color] || colors.primary};
  font-weight: 600;
  color: ${colors.neutralLightest};
  border-radius: ${borderRadius};
  cursor: pointer;
`;
