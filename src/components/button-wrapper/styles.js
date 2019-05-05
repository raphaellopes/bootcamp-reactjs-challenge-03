import styled from 'styled-components';

export const ButtonWrapperStyle = styled.div`
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
