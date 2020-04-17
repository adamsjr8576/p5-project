 const sketch1 = p => {
  p.setup = () => {
    let canvas = p.createCanvas(640, 480);
    canvas.position(400, 50);
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
    //   if(canvas) //Make sure the canvas has been created
    //     p.fill(newProps.color);
    }
}

export default sketch1;
