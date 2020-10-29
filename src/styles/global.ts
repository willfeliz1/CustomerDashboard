import { createGlobalStyle } from 'styled-components';
import px2vw from '../utils/px2vw';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #EBECEB;
    color: #000;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;

    @media (max-width: 1400px) {
      font-size: ${px2vw(18)};
    }

    @media (max-width: 720px) {
      font-size: ${px2vw(60)}
    }
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  h3 {
    font-size: 19px;
  }

  button {
    cursor: pointer;
  }

  p {
    color: #252625;
  }


 `;
