import React from 'react';
import './Sketch2.css';
import P5Wrapper from 'react-p5-wrapper';
import sketch2 from '../../sketches/sketch2.js';

const Sketch2 = () => {
  return (
    <section className="sketch2-section">
      <P5Wrapper sketch={sketch2}></P5Wrapper>
    </section>
  );
}

export default Sketch2;
