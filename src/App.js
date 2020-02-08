import React from 'react';

import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Router from './Router';

const theme = {
  yellow: "#F3B81D",
  orange: "#CF7207",
  nightBlue: "#0F2934",
  standartOpacity: "0.3",
};

const GlobalStyle = createGlobalStyle`

  html {
    font-family: 'Montserrat';
    box-sizing: border-box;
    font-size: 10px;
    min-width: 320px;
  };
  *, *:before, *:after{
    font-family: 'Montserrat';
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