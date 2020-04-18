const sketch3 = p => {
  p.setup = () => {
    p.createCanvas(p.windowWidth/1.2, p.windowHeight/1.2);
    p.noLoop();
  }

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth/1.2, p.windowHeight/1.2);
  }

  let backgroundValue = 50;
  let fillValue = 200;

  p.draw = () => {
    p.blendMode(p.DIFFERENCE);
    p.background(backgroundValue);
    p.fill(0, 0 ,fillValue);
    p.noStroke();

    let xCenter = p.width/2;
    let yCenter = p.height/2;

    const size = p.min(p.width, p.height) * 0.5;
    p.rectMode(p.CENTER);
    p.rect(xCenter, yCenter, size, size);

    p.push()
      p.translate(size/2.2, -size/2.2 );
      p.circle(xCenter, yCenter, size);
    p.pop()

    p.push()
      p.translate(-size/2, -size/2.2);
      p.circle(xCenter, yCenter, size);
    p.pop()

    p.push()
      p.triangle(xCenter - size/3, yCenter - size/3, xCenter + size/3, yCenter - size/3, xCenter, yCenter + size/3);
    p.pop()

    p.push()
      p.translate(0, size/2.4);
      p.rect(xCenter, yCenter, size*3, size/6);
    p.pop()

    p.push()
      p.stroke(0, 0, fillValue);
      p.strokeWeight(5);
      p.line(xCenter, 0, xCenter - (size+5), yCenter);
      p.line(xCenter, 0, xCenter - (size+200), yCenter);
      p.line(xCenter, 0, xCenter + (size+5), yCenter);
      p.line(xCenter, 0, xCenter + (size+200), yCenter);
    p.pop()

    p.push()
      p.translate(0, size/1.716);
      p.circle(xCenter, yCenter, size/2);
    p.pop()

    p.push()
      p.translate(-size, size/1.716);
      p.circle(xCenter, yCenter, size/2);
    p.pop()

    p.push()
      p.translate(size, size/1.716);
      p.circle(xCenter, yCenter, size/2);
    p.pop()

    p.push()
      p.stroke(0, 0, fillValue);
      p.strokeWeight(5);
      p.line(xCenter - (size+5), yCenter, xCenter + size/2, p.height);
      p.line(xCenter + (size+5), yCenter, xCenter - size/2, p.height);
      p.line(xCenter - (size+200), yCenter, xCenter - size/2, p.height);
      p.line(xCenter + (size+200), yCenter, xCenter + size/2, p.height);
    p.pop()
  }

  p.mouseClicked = () => {
    backgroundValue === 50? backgroundValue = 200 : backgroundValue = 50;
    fillValue === 200? fillValue = 20 : fillValue = 200;
    p.redraw();
  }

  p.myCustomRedrawAccordingToNewPropsHandler = (newProps) => {
    }
}

export default sketch3;
