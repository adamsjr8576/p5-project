import React from 'react';
import './App.css';
import P5Wrapper from 'react-p5-wrapper';
import Sketch from '../Sketch/Sketch.js';
import sketch6 from '../../sketches/sketch6';
import sketch1 from '../../sketches/sketch1';
import sketch2 from '../../sketches/sketch2';
import sketch3 from '../../sketches/sketch3';
import sketch4 from '../../sketches/sketch4';
import sketch5 from '../../sketches/sketch5';
import sketch7 from '../../sketches/sketch7';

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1>An Exploration of p5.js</h1>
      </header>
      <P5Wrapper sketch={sketch6}></P5Wrapper>
      <main className="sketch-main">
        <Sketch sketch={sketch1}/>
        <Sketch sketch={sketch2}/>
        <Sketch sketch={sketch3}/>
        <Sketch sketch={sketch4}/>
        <Sketch sketch={sketch5}/>
        <Sketch sketch={sketch7}/>
      </main>
    </div>
  );
}

export default App;
