import styled from 'styled-components';

import { colors, borderRadius } from '../../styles/variables';

export const InputStyle = styled.input`
  background: #fff;
  border: 1px solid ${colors.neutralLight};
  color: ${colors.neutralDark};
  padding: 10px 15px;
  border-radius: ${borderRadius};
  width: 100%;
`;
