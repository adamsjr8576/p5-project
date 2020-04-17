const sketch4 = p => {
  p.setup = () => {
    p.createCanvas(windowWidth, windowHeight);
  }

  p.windowResized = () => {
    resizeCanvas(windowWidth, windowHeight);
  }

  let diameter = 19;
  let weight = 1;
  let increase = true;
  p.draw = () => {
    p.noFill();
    p.stroke(255);
    p.strokeWeight(weight);
    p.background(0);
    xCenter = p.width/2;
    yCenter = p.height/2;
    if (increase === true) {
      diameter += 2;
      weight += 0.15;
    }
    if (increase === false) {
      diameter -= 2;
      weight -= 0.15;
    }
    if (diameter > width/2.5) {
      p.clear();
      p.background(0);
      increase = false;
    }
    if (diameter < 20) {
      p.clear();
      p.background(0);
      increase = true;
    }
    p.circle(xCenter, yCenter, diameter);
    p.line(xCenter/4, yCenter, diameter, yCenter);
    p.line(xCenter*1.75, yCenter, width - diameter, yCenter);
    p.line(xCenter, yCenter/4, xCenter, diameter/2);
    p.line(xCenter, yCenter/6, xCenter, diameter/2);
    p.line(xCenter, yCenter*1.85, xCenter, height - diameter/2);
  }

  p.mousePressed = () => {
    loop();
  }

  p.mouseReleased = () => {
    noLoop();
  }

  p.myCustomRedrawAccordingToNewPropsHandler = (newProps) => {
    //   if(canvas) //Make sure the canvas has been created
    //     p.fill(newProps.color);
    }
}

export default sketch4;
