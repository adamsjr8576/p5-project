const sketch6 = p => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
  }

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  }

  p.draw = () => {
    p.redraw();
    p.background(230);

    const xCenter = p.width/2;
    const yCenter = p.height/2;

    p.strokeJoin(p.ROUND);
    p.strokeWeight(5);
    p.stroke(0);
    p.noFill();

    const seconds = p.millis()/1000;

    const duration4 = 40;
    const playhead4 = seconds/duration4 % 1;
    const animation4 = playhead4*p.PI*2;

    const duration1 = 20;
    const playhead1 = seconds/duration1 % 1;
    const animation1 = playhead1*p.PI*2;

    const duration2 = 10;
    const playhead2 = seconds/duration2 % 1;
    const animation2 = playhead2*p.PI*2;

    const duration3 = 5;
    const playhead3 = seconds/duration3 % 1;
    const animation3 = playhead3*p.PI*2;

    p.push();
      p.noStroke();
      p.fill('rgba(0, 0, 250, 0.5)');
      p.translate(xCenter-xCenter/4, yCenter);
      p.rotate(-animation1);
      p.rectMode(p.CENTER);
      p.rect(0, 0, 300, 300);
    p.pop();

    p.push();
      p.noStroke();
      p.fill('rgba(0, 100, 200, 0.5)');
      p.translate(xCenter-xCenter/4, yCenter);
      p.rotate(animation4);
      p.rectMode(p.CENTER);
      p.rect(-250, 250, 200, 200);
    p.pop();

    p.push();
      p.noStroke();
      p.fill('rgba(0, 0, 250, 0.5)')
      p.translate(xCenter+xCenter/4, yCenter);
      p.rotate(animation1);
      p.rectMode(p.CENTER);
      p.rect(0, 0, 300, 300);
    p.pop();

    p.push();
      p.noStroke();
      p.fill('rgba(0, 100, 200, 0.5)')
      p.translate(xCenter+xCenter/4, yCenter);
      p.rotate(-animation4);
      p.rectMode(p.CENTER);
      p.rect(250, 250, 200, 200);
    p.pop();

    p.push();
      p.strokeWeight(8);
      p.stroke('rgba(250, 0, 0, 0.5)')
      p.translate(xCenter, yCenter);
      p.rotate(animation2);
      p.line(0, -yCenter/4, 0, +yCenter/4);
    p.pop();

    p.push();
      p.strokeWeight(8);
      p.stroke('rgba(250, 0, 0, 0.5)')
      p.translate(xCenter, yCenter);
      p.rotate(-animation2);
      p.line(0, -yCenter/4, 0, +yCenter/4);
    p.pop();

    p.push();
      p.strokeWeight(8);
      p.stroke('rgba(250, 0, 0, 0.5)')
      p.translate(xCenter, yCenter);
      p.rotate(animation1);
      p.line(0, yCenter-100, 0, yCenter-25);
    p.pop();

    p.push();
      p.strokeWeight(8);
      p.stroke('rgba(250, 0, 0, 0.5)')
      p.translate(xCenter, yCenter);
      p.rotate(-animation1);
      p.line(0, yCenter-100, 0, yCenter-25);
    p.pop();

    p.push();
      p.strokeWeight(8);
      p.stroke('rgba(250, 0, 0, 0.5)')
      p.translate(xCenter, yCenter);
      p.rotate(animation1);
      p.triangle(-50, 150, 50, 150, 0, 250)
    p.pop();

    p.push();
      p.strokeWeight(8);
      p.stroke('rgba(250, 0, 0, 0.5)')
      p.translate(xCenter, yCenter);
      p.rotate(-animation1);
      p.triangle(-50, 150, 50, 150, 0, 250)
    p.pop();

    p.push();
      p.strokeWeight(8);
      p.stroke('rgba(250, 0, 0, 0.5)')
      p.translate(xCenter, yCenter);
      p.rotate(-animation2);
      p.circle(0, 185, 50);
    p.pop();

    p.push();
      p.strokeWeight(8);
      p.stroke('rgba(250, 0, 0, 0.5)')
      p.translate(xCenter, yCenter);
      p.rotate(animation2);
      p.circle(0, 185, 50);
    p.pop();

    p.push();
      p.strokeWeight(8);
      p.stroke('rgba(250, 0, 0, 0.5)')
      p.translate(xCenter, yCenter);
      p.rotate(-animation2);
      p.circle(0, -185, 50);
    p.pop();

    p.push();
      p.strokeWeight(8);
      p.stroke('rgba(250, 0, 0, 0.5)')
      p.translate(xCenter, yCenter);
      p.rotate(animation2);
      p.circle(0, -185, 50);
    p.pop();

    p.push();
      p.strokeWeight(8);
      p.stroke('rgba(250, 0, 0, 0.5)')
      p.translate(xCenter, yCenter);
      p.rotate(animation1);
      p.line(-140, -530, 140, -530);
    p.pop();

    p.push();
      p.strokeWeight(8);
      p.stroke('rgba(250, 0, 0, 0.5)')
      p.translate(xCenter, yCenter);
      p.rotate(-animation1);
      p.line(-140, -530, 140, -530);
    p.pop();
  }

  p.myCustomRedrawAccordingToNewPropsHandler = (newProps) => {
    //   if(canvas) //Make sure the canvas has been created
    //     p.fill(newProps.color);
    }
}

export default sketch6;
