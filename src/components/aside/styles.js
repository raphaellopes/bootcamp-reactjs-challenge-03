// vendors
import styled from 'styled-components';

// locals
import {
  colors, baseSpace, borderRadius, fontSizes,
} from '../../styles/variables';

export const AsideStyle = styled.aside`
  background: ${colors.neutralLightest};
  position: fixed;
  top: ${baseSpace};
  left: ${baseSpace};
  bottom: ${baseSpace};
  z-index: 3;
  min-width: 350px;
  border-radius: ${borderRadius};
  box-shadow: 0px 0 6px rgba(0,0,0, 0.2);
  padding: ${baseSpace};
`;

export const UsersList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;

  i {
    margin-left: ${baseSpace};
    font-size: ${fontSizes.larger};
    cursor: pointer;
  }

  .user-img {
    margin-right: ${baseSpace};
  }

  .user-item {
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${colors.neutralLight};
    padding: ${baseSpace} 0;
  }

  .user-info {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .user-username {
    color: ${colors.neutralDark};
  }
`;

export const AlertResume = styled.div`
  text-align: center;
`;
