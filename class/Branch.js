class Branch{
  constructor(x1, y1, x2, y2, stroke, strokeWeight) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
  this.stroke = stroke;
  this.strokeWeight = strokeWeight

  }
  display() {
  stroke(this.stroke)
  strokeWeight(this.strokeWeight)
  line(this.x1, this.y1, this.x2, this.y2);
  }
}

