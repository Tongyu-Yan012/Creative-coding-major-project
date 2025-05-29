class SemiCircle {
  //https://editor.p5js.org/aartsyfaartsy/sketches/Go8edGRsZ
  /**
   * The parameter need you input the point1 and the point2
   * Also you can input the color1, color2 and borderWeight
   * **/
  constructor(
    p1,
    p2,
    color1 = [255, 0, 0],
    color2 = [255, 200, 0],
    borderWeight = 5
  ) {
    this.p1 = p1;
    this.p2 = p2;
    this.color1 = color1;
    this.color2 = color2;
    this.cx = (this.p1.x + this.p2.x) / 2;
    this.cy = (this.p1.y + this.p2.y) / 2;
    //https://p5js.org/reference/p5/dist/
    this.diameter = dist(this.p1.x, this.p1.y, this.p2.x, this.p2.y);
    //https://p5js.org/reference/p5/atan2/
    this.angle = atan2(this.p2.y - this.p1.y, this.p2.x - this.p1.x);
    this.borderWeight = borderWeight;
  }

  display() {
    push();
    translate(this.cx, this.cy);
    rotate(this.angle);
    //Outline
    noFill();
    stroke(0);
    strokeWeight(this.borderWeight);
    // https://p5js.org/reference/p5/arc/
    arc(0, 0, this.diameter, this.diameter, -PI / 2, PI / 2, PIE);

    // Half Circle
    noStroke();
    fill(...this.color1);
    arc(0, 0, this.diameter, this.diameter, -PI / 2, PI / 2, PIE);

    //Second Outline
    noFill();
    stroke(0);
    strokeWeight(this.borderWeight);
    arc(0, 0, this.diameter, this.diameter, PI / 2, -PI / 2, PIE);

    //Second Half Circle
    noStroke();
    fill(...this.color2);
    arc(0, 0, this.diameter, this.diameter, PI / 2, -PI / 2, PIE);
    pop();
  }
}
