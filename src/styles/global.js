// vendors
import { createGlobalStyle } from 'styled-components';
import 'font-awesome/css/font-awesome.css';

// locals
import { fontSizes } from './variables';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    font-family: sans-serif;
    font-size: ${fontSizes.base};
    background: #FFF;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }
`;

export default GlobalStyle;
