 const sketch1 = p => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
  }

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  }

  p.draw = () => {
    p.stroke('purple');
    p.strokeWeight(3);
    if (p.mouseIsPressed) {
      p.fill(0);
    } else {
      p.fill(255);
    }
    p.ellipse(p.mouseX, p.mouseY, 80, 80);
  }

  p.myCustomRedrawAccordingToNewPropsHandler = (newProps) => {
    }
}

export default sketch1;
