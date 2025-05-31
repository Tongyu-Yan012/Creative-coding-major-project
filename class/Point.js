class Point {
  constructor(x, y, r = 8) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  display() {
    push();
    noStroke();
    fill(255);
    ellipse(this.x, this.y, this.r, this.r);
    pop();
  }
}
