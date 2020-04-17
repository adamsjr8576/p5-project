import React from 'react';
import './App.css';
import P5Wrapper from 'react-p5-wrapper';
import sketch1 from '../../sketches/sketch1.js';

const App = () => {
  return (
    <div className="App">
      <header>p5.js Explorations of John Adams</header>
      <body>
        <P5Wrapper sketch={sketch1}></P5Wrapper>
      </body>
    </div>
  );
}

export default App;
