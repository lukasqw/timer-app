import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
  }

  body {
    background: rgb(200,38,198);
    background: linear-gradient(45deg, rgba(200,38,198,1) 0%, rgba(111,36,179,1) 50%, rgba(69,213,169,1) 100%);
    -webkit-font-smoothing: antialiased;
    height: 100vh;
  }

  body, input, button {
    font-family: 'Roboto', serif;
    color: white;
  }

  #root {
    max-width: 1100px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  button {
    cursor: pointer;
  }
`;
