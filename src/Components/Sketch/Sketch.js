import React from 'react';
import './Sketch.css';
import P5Wrapper from 'react-p5-wrapper';

const Sketch = ({ sketch }) => {
  return (
    <section className="sketch-section">
      <P5Wrapper sketch={sketch}></P5Wrapper>
    </section>
  );
}

export default Sketch;
