class SemiCircle {
  //https://editor.p5js.org/aartsyfaartsy/sketches/Go8edGRsZ
  /**
   * The parameter need you input the point1 and the point2
   * Also you can input the color1, color2 and borderWeight
   * **/
  constructor(
    p1,
    p2,
    colorControlNum,
    color1 = [122, 192, 142, 255],
    color2 = [250, 88, 85, 255],
    borderWeight = 2
  ) {
    this.p1 = p1;
    this.p2 = p2;
    this.colorControlNum = colorControlNum;
    this.color1 = color1;
    this.color2 = color2;
    this.cx = (this.p1.x + this.p2.x) / 2;
    this.cy = (this.p1.y + this.p2.y) / 2;
    //https://p5js.org/reference/p5/dist/
    this.diameter = dist(this.p1.x, this.p1.y, this.p2.x, this.p2.y);
    //https://p5js.org/reference/p5/atan2/
    this.angle = atan2(this.p2.y - this.p1.y, this.p2.x - this.p1.x);
    this.borderWeight = borderWeight;

    // Drop Down attributes
    this.falling = false;
    this.hasDown = false;
    this.velocity = 0;
    this.gravity = 0.5;
    this.boundness = 0.8;
    this.groundY = 800;

    this.minimumSpeed = 0.2;
  }

  display() {
    push();
    translate(this.cx, this.cy);
    rotate(this.angle);

    //Outline
    noFill();
    stroke(0, 1, 0, 10);
    strokeWeight(this.borderWeight);
    // https://p5js.org/reference/p5/arc/
    arc(0, 0, this.diameter, this.diameter, PI, 0, PIE);

    // Half Circle
    noStroke();
    if (this.colorControlNum % 2 == 0) {
      fill(...this.color1);
    } else {
      fill(...this.color2);
    }
    arc(0, 0, this.diameter, this.diameter, PI, 0, PIE);

    //Second Outline
    noFill();
    stroke(0, 1, 0, 10);
    strokeWeight(this.borderWeight);
    arc(0, 0, this.diameter, this.diameter, 0, PI, PIE);

    //Second Half Circle
    noStroke();
    if (this.colorControlNum % 2 == 0) {
      fill(...this.color2);
    } else {
      fill(...this.color1);
    }
    arc(0, 0, this.diameter, this.diameter, 0, PI, PIE);
    pop();
  }
}
