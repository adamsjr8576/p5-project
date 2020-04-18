const sketch5 = p => {
  p.setup = () => {
    p.createCanvas(p.windowWidth/1.2, p.windowHeight/1.2);
  }

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth/1.2, p.windowHeight/1.2);
  }

  p.draw = () => {
    p.background(0);
    const xCenter = p.width/2;
    const yCenter = p.height/2;
    let seconds = p.millis() / 1000;
    let duration = 5;
    let anim = seconds / duration % 1;
    const round = p.sin(anim * p.PI * 2) * 0.5 + 0.5;
    p.noFill();
    p.stroke(255);
    p.strokeWeight(round * 20);
    p.circle(xCenter, yCenter, round * 350);
    p.line(xCenter - round*500, yCenter, xCenter + round*500, yCenter);
    p.line(xCenter + round*500, yCenter + yCenter/2, xCenter + round*500, yCenter - yCenter/2);
    p.line(xCenter - round*500, yCenter + yCenter/2, xCenter - round*500, yCenter - yCenter/2);
    p.line(xCenter, yCenter + round*250, xCenter, yCenter - round*250);
    p.line(xCenter - xCenter/4, yCenter - round*250, xCenter + xCenter/4, yCenter - round*250);
    p.line(xCenter - xCenter/4, yCenter + round*250, xCenter + xCenter/4, yCenter + round*250);
    p.push();
      p.translate(round*500, 0);
      p.circle(xCenter, yCenter, 150);
    p.pop();

    p.push();
      p.translate(-round*500, 0);
      p.circle(xCenter, yCenter, 150);
    p.pop();

    p.push();
      p.translate(0, +round*250);
      p.circle(xCenter, yCenter, 150);
    p.pop();

    p.push();
      p.translate(0, -round*250);
      p.circle(xCenter, yCenter, 150);
    p.pop();
  }

  // p.mousePressed = () => {
  //   p.loop();
  // }
  //
  // p.mouseReleased = () => {
  //   p.noLoop();
  // }

  p.myCustomRedrawAccordingToNewPropsHandler = (newProps) => {
    //   if(canvas) //Make sure the canvas has been created
    //     p.fill(newProps.color);
    }
}

export default sketch5;
