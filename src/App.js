import React from "react"

import { ThemeProvider, createGlobalStyle } from "styled-components"
import IndexRouter from "./IndexRouter"

const theme = {
  yellow: "#F3B81D",
  orange: "#CF7207",
  nightBlue: "#0F2934",
  semiWhite: "#FCFFF3",
  yellowSemiWhite: "linear-gradient(90deg, #F3B81D  50%, #FCFFF3 50%)",
  standartOpacity: "0.3"
}

const GlobalStyle = createGlobalStyle`

  html {
    font-family: 'Montserrat';
    box-sizing: border-box;
    font-size: 62.5%;
    min-width: 320px;
  };
  *, *:before, *:after{
    font-family: 'Montserrat';
    box-sizing: border-box;
  };
  body {
    padding: 0;
    margin: 0;
    font-size: 1.8rem;
    background: #FCFFF3;
  };
  a{
    text-decoration: none;
  }
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <GlobalStyle />
        <IndexRouter />
      </div>
    </ThemeProvider>
  )
}

export default App
