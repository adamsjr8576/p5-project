const sketch5 = p => {
  p.setup = () => {
    p.createCanvas(windowWidth, windowHeight);
  }

  p.windowResized = () => {
    p.resizeCanvas(windowWidth, windowHeight);
  }

  p.draw = () => {
    p.background(0);
    xCenter = p.width/2;
    yCenter = p.height/2;
    let seconds = p.millis() / 1000;
    let duration = 5;
    let anim = seconds / duration % 1;
    const round = p.sin(anim * PI * 2) * 0.5 + 0.5;
    p.noFill();
    p.stroke(255);
    p.strokeWeight(round * 20);
    p.circle(xCenter, yCenter, round * 350);
    p.line(xCenter - round*500, yCenter, xCenter + round*500, yCenter);
    p.line(xCenter + round*500, yCenter + yCenter/2, xCenter + round*500, yCenter - yCenter/2);
    p.line(xCenter - round*500, yCenter + yCenter/2, xCenter - round*500, yCenter - yCenter/2);
    p.line(xCenter, yCenter + round*300, xCenter, yCenter - round*300);
    p.line(xCenter - xCenter/4, yCenter - round*300, xCenter + xCenter/4, yCenter - round*300);
    p.line(xCenter - xCenter/4, yCenter + round*300, xCenter + xCenter/4, yCenter + round*300);
    p.push();
      p.translate(round*500, 0);
      p.circle(xCenter, yCenter, 150);
    p.pop();

    p.push();
      p.translate(-round*500, 0);
      p.circle(xCenter, yCenter, 150);
    p.pop();

    p.push();
      p.translate(0, +round*300);
      p.circle(xCenter, yCenter, 150);
    p.pop();

    p.push();
      p.translate(0, -round*300);
      p.circle(xCenter, yCenter, 150);
    p.pop();
  }

  p.mousePressed = () => {
    p.loop();
  }

  p.mouseReleased = () => {
    p.noLoop();
  }

  p.myCustomRedrawAccordingToNewPropsHandler = (newProps) => {
    //   if(canvas) //Make sure the canvas has been created
    //     p.fill(newProps.color);
    }
}

export default sketch5;
