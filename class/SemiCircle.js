class SemiCircle {
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
    this.originalDiameter = this.diameter; // Save original diameter
    //https://p5js.org/reference/p5/atan2/
    this.angle = atan2(this.p2.y - this.p1.y, this.p2.x - this.p1.x);
    this.borderWeight = borderWeight;
    
    // Store the original position for resetting
    this.originalCx = this.cx;
    this.originalCy = this.cy;
    
    // Scaling factor
    this.scaleFactor = 1.0;
  }

  display() {
    push();
    translate(this.cx, this.cy);
    rotate(this.angle);

    // Apply scaling factor
    let currentDiameter = this.diameter * this.scaleFactor;

    //Outline
    noFill();
    stroke(0, 1, 0, 10);
    strokeWeight(this.borderWeight);
    // https://p5js.org/reference/p5/arc/
    arc(0, 0, currentDiameter, currentDiameter, PI, 0, PIE);

    // Half Circle
    noStroke();
    if (this.colorControlNum % 2 == 0) {
      fill(...this.color1);
    } else {
      fill(...this.color2);
    }
    arc(0, 0, currentDiameter, currentDiameter, PI, 0, PIE);

    //Second Outline
    noFill();
    stroke(0, 1, 0, 10);
    strokeWeight(this.borderWeight);
    arc(0, 0, currentDiameter, currentDiameter, 0, PI, PIE);

    //Second Half Circle
    noStroke();
    if (this.colorControlNum % 2 == 0) {
      fill(...this.color2);
    } else {
      fill(...this.color1);
    }
    arc(0, 0, currentDiameter, currentDiameter, 0, PI, PIE);
    pop();
  }
  
  // Update scaling factor
  updateScale(factor) {
    this.scaleFactor = factor;
  }
  
  // Reset position and size
  reset() {
    this.cx = this.originalCx;
    this.cy = this.originalCy;
    this.scaleFactor = 1.0;
  }
}