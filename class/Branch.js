class Branch{
  constructor(p1, p2, stroke, strokeWeight) {
  this.p1 = p1
  this.p2 = p2
  this.stroke = stroke;
  this.strokeWeight = strokeWeight

  }
  display() {
  stroke(this.stroke)
  strokeWeight(this.strokeWeight)
  line(p1.x1, p1.y1, p2.x2, p2.y2);
  }
}

