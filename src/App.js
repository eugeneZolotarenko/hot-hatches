import React from 'react';

import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Router from './Router';

const theme = {
  grey: "#C1C4C3",
  olive: "#8BA390",
  bigRadius: "30px",
  smallRadius: "10px",
  maxWidth: "1210px",
};

const GlobalStyle = createGlobalStyle`
  html {
    font-family: Montserrat;
    box-sizing: border-box;
    font-size: 10px;
    min-width: 320px;
  };
  *, *:before, *:after{
    box-sizing: border-box;
  };
  body {
    padding: 0;
    margin: 0;
    font-size: 1.7rem;
    background: #FCFFF3;
  };
  a{
    text-decoration: none;
  }
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Router/>
      </div>
    </ThemeProvider>
  );
}

export default App;