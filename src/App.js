import React from "react"

import { ThemeProvider, createGlobalStyle } from "styled-components"
import IndexRouter from "./IndexRouter"

const theme = {
  yellow: "#F3B81D",
  orange: "#CF7207",
  nightBlue: "#0F2934",
  semiWhite: "#FCFFF3",
  yellowSemiWhite: "linear-gradient(90deg, #F3B81D  50%, #FCFFF3 50%)",
  verticalYellowSemiWhite: "linear-gradient(180deg, #F3B81D  50%, #FCFFF3 50%)",
  standartOpacity: "0.3",
  cardShadow: "15px 15px 0px 0px #0F2934",
  reverseCardShdow: "-15px 15px 0px 0px #0F2934"
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
    max-width: 100vw;
    position: relative;
    &::before {
      content: "";
      background: ${(props) => props.theme.nightBlue};
      width: 51vw;
      height: 11px;
      position: absolute;
      top: 0;
      right: 0;
    }
  };
  a{
    text-decoration: none;
  }
  .first-letter {
      color: ${(props) => props.theme.orange};
      font-size: 16rem;
      font-weight: bold;
      position: absolute;
      opacity: 0.3;
      top: -5%;
      left: -6%;
      @media (max-width: 1400px) {
        font-size: 15rem;
      }

      @media (max-width: 900px) {
        font-size: 14rem;
      }

      @media (max-width: 600px) {
        font-size: 10rem;
      }
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
