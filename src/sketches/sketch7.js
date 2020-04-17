const sketch7 = p => {
  p.setup = () => {
    createCanvas(windowWidth, windowHeight);
  }

  p.windowResized = () => {
    resizeCanvas(windowWidth, windowHeight);
  }

  p.draw = () => {
    p.background(50);

    const xCenter = p.width/2;
    const yCenter = p.height/2;

    p.strokeJoin(ROUND);
    p.strokeWeight(5);
    p.stroke(230);
    p.noFill();

    const seconds = p.millis()/1000;

    const duration = 20;
    const playhead = seconds/duration % 1;
    const animation = playhead * PI * 2;

    const duration2 = 10;
    const playhead2 = seconds/duration2 % 1;


    let movement = (p.sin(playhead*PI*2)) * 0.5 + 0.5;
    let movement2 = (p.sin(playhead2*PI*2)) * 0.5 + 0.5;

    const startX = [xCenter/4, yCenter];
    const endX = [(width - xCenter/4), yCenter];
    const x = p.lerp(startX[0], endX[0], movement);
    const y = p.lerp(startX[1], endX[1], movement);

    const startY = [xCenter, yCenter/1.5];
    const endY = [xCenter, (height - yCenter/1.5)];
    const x2 = p.lerp(startY[0], endY[0], movement);
    const y2 = p.lerp(startY[1], endY[1], movement);

    const startXY = [200, 200];
    const endXY = [(width - 200), (height - 200)];
    const x3 = p.lerp(startXY[0], endXY[0], movement);
    const y3 = p.lerp(startXY[1], endXY[1], movement);

    p.push();
      p.strokeWeight(movement2*5 + 1);
      p.translate(x, y);
      p.rotate(-animation);
      p.point(0, 100);
      p.ellipse(0, 100, movement2* 50 + 20);
      p.ellipse(0, 100, movement2* 50 + 40);
    p.pop();

    p.push();
      p.strokeWeight(movement2*5 + 1);
      p.translate(x, y);
      p.rotate(animation);
      p.point(0, -100);
      p.ellipse(0, -100, movement2* 50 + 20);
      p.ellipse(0, -100, movement2* 50 + 40);
    p.pop();

    p.push();
      p.strokeWeight(movement2*5 + 1);
      p.translate(x2, y2);
      p.rotate(animation);
      p.point(200, 0);
      p.ellipse(200, 0, movement2* 50 + 20);
      p.ellipse(200, 0, movement2* 50 + 40);
    p.pop();

    p.push();
      p.strokeWeight(movement2*5 + 1);
      p.translate(x2, y2);
      p.rotate(-animation);
      p.point(-200, 0);
      p.ellipse(-200, 0, movement2* 50 + 20);
      p.ellipse(-200, 0, movement2* 50 + 40);
    p.pop();

    p.push();
      p.strokeWeight(movement2*5 + 1);
      p.translate(x3, y3);
      p.rotate(animation);
      p.point(100, -100);
      p.ellipse(100, -100, movement2* 50 + 20);
      p.ellipse(100, -100, movement2* 50 + 40);
    p.pop();

    p.push();
      p.strokeWeight(movement2*5 + 1);
      p.translate(x3, y3);
      p.rotate(-animation);
      p.point(-100, 100);
      p.ellipse(-100, 100, movement2* 50 + 20);
      p.ellipse(-100, 100, movement2* 50 + 40);
    p.pop();

    const line1Point1 = [15, 25];
    const line1 = p.lerp(5, line1Point1[1], movement);

    const line2Point1 = [14, 18];
    const line2 = p.lerp(5, line2Point1[1], movement2);

    p.push();
      p.translate(xCenter, yCenter);
      p.rotate(-animation*2);
      p.strokeWeight(3);
      p.line(0, line1, 0, -line1);
      p.line(line1, 0, -line1, 0);
      p.line(-line2, line2, line2, -line2);
      p.line(line2, line2, -line2, -line2);
    p.pop();
  }

  p.myCustomRedrawAccordingToNewPropsHandler = (newProps) => {
    //   if(canvas) //Make sure the canvas has been created
    //     p.fill(newProps.color);
    }
}

export default sketch7;
