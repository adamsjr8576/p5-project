import React from 'react';
import './Sketch1.css';
import P5Wrapper from 'react-p5-wrapper';
import sketch1 from '../../sketches/sketch1.js';

const Sketch1 = () => {
  return (
    <section className="sketch1-section">
      <P5Wrapper sketch={sketch1}></P5Wrapper>
    </section>
  );
}

export default Sketch1;
