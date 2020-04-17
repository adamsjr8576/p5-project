import React from 'react';
import './App.css';
import P5Wrapper from 'react-p5-wrapper';
import Sketch1 from '../Sketch1/Sketch1.js';
import sketch6 from '../../sketches/sketch6';

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1>An Exploration of p5.js</h1>
      </header>
      <P5Wrapper sketch={sketch6}></P5Wrapper>
      <main className="sketch-main">
        <Sketch1 />
      </main>
    </div>
  );
}

export default App;
