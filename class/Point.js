class Point {
  constructor(x, y, r = 8) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  display() {
    noStroke();
    fill(0);
    ellipse(this.x, this.y, this.r, this.r);
  }
}

