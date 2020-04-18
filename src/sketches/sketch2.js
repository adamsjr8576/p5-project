const sketch2 = p => {

  p.setup = () => {
    let canvas = p.createCanvas(640, 480);
    canvas.position(400, 50);
  }

  let backgroundValue = 210;
  let strokeValue = 0;

  p.draw = () => {
    p.background(backgroundValue);
    p.strokeWeight(5);
    p.stroke(strokeValue);
    p.fill(backgroundValue);
    p.strokeJoin(p.ROUND);
    p.smooth();

    let triWidth = p.width/2;
    const xCenter = p.width/2;
    const yCenter = p.height/2;

    p.triangle(xCenter/2,
      yCenter + yCenter/2,
      xCenter/2 + triWidth,
      yCenter + yCenter/2,
      xCenter,
      yCenter/2);
    p.circle(xCenter, yCenter + yCenter/2 - triWidth/3.76, triWidth/1.88);
    p.line(xCenter, yCenter/2, xCenter, yCenter + yCenter/2);
  }

  p.mouseClicked = () => {
    backgroundValue === 210? backgroundValue = 0 : backgroundValue = 210;
    strokeValue === 0? strokeValue = 255 : strokeValue = 0;
  }

  p.myCustomRedrawAccordingToNewPropsHandler = (newProps) => {
    //   if(canvas) //Make sure the canvas has been created
    //     p.fill(newProps.color);
    }
}

export default sketch2;
