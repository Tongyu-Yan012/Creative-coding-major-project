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
  line(this.p1.x, this.p1.y, this.p2.x, this.p2.y);
  }
}

