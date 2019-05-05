// vendors
import styled from 'styled-components';

// locals
import { colors } from '../../styles/variables';

export const Form = styled.form`
  min-width: 250px;

  input {
    border-color: ${props => props.withError && colors.error};
  }
`;
