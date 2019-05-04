// vendors
import styled from 'styled-components';

// locals
import { fontSizes, colors } from '../../styles/variables';

export const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 10px;

  button {
    flex: 1;

    &:first-child {
      margin-right: 5px;
    }

    &:last-child {
      margin-left: 5px;
    }
  }
`;

export const Form = styled.form`
  min-width: 250px;

  h1 {
    text-align: center;
    font-size: ${fontSizes.base};
    margin-bottom: 15px;
  }

  input {
    border-color: ${props => props.withError && colors.error};
  }
`;
