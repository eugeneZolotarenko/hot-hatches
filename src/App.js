import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Router from './Router';

const GlobalStyle = createGlobalStyle`
  body {
    background: #FCFFF3;
    margin: 0;
    padding: 0;
  }
`


function App() {
  return (
        <div className="App">
            <GlobalStyle />
            <Router/>
        </div>
  );
}

export default App;