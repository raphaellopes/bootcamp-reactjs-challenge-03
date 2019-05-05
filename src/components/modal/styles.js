// vendors
import styled from 'styled-components';

// locals
import {
  colors, fontSizes, borderRadius, baseSpace,
} from '../../styles/variables';

export const Backdrop = styled.div`
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 4;
`;

export const Content = styled.div`
  background: ${colors.neutralLightest};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  padding: ${baseSpace};
  border-radius: ${borderRadius};
`;

export const Title = styled.h1`
  text-align: center;
  font-size: ${fontSizes.base};
  margin-bottom: ${baseSpace};
`;
