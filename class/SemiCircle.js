class SemiCircle {
  //https://editor.p5js.org/aartsyfaartsy/sketches/Go8edGRsZ
  /**
   * The parameter need you input the point1 and the point2
   * Also you can input the color1, color2 and borderWeight
   * **/
  constructor(p1, p2, colorControlNum, color1 = [122, 192, 142, 255], color2 = [250, 88, 85, 255], borderWeight = 2) {
    this.p1 = p1;
    this.p2 = p2;
    this.colorControlNum = colorControlNum;
    this.color1 = color1;
    this.color2 = color2;
    this.borderWeight = borderWeight;
    this.noiseScale = random(0.1, 0.3);
    this.noiseLocation = random(1000);
  }

  display() {
    let offsetX = 0;
    let offsetY = 0;
    let angleOffset = (noise(this.noiseLocation + 200) - 0.5) * this.noiseScale * 2;
    let scaleFactor = 1;
    if (treeDrawnFinished) {
      let xNoise = noise(this.noiseLocation);
      let yNoise = noise(this.noiseLocation + 50);
      offsetX = (xNoise * 2 - 1) * this.noiseScale * 20;
      offsetY = (yNoise * 2 - 1) * this.noiseScale * 20;
      scaleFactor = 1 + (noise(this.noiseLocation + 300) - 0.5) * this.noiseScale * 1.5;
      this.noiseLocation += 0.01;
    }

    let cx = (this.p1.x + this.p2.x) / 2 + offsetX;
    let cy = (this.p1.y + this.p2.y) / 2 + offsetY;
    let diameter = dist(this.p1.x, this.p1.y, this.p2.x, this.p2.y);
    let angle = atan2(this.p2.y - this.p1.y, this.p2.x - this.p1.x);

    push();
    translate(cx, cy);
    rotate(angle);
    push();
    rotate(angleOffset); 
    pop();
    scale(scaleFactor, 1);
   

    noFill();
    stroke(0, 1, 0, 10);
    strokeWeight(this.borderWeight);
    arc(0, 0, diameter, diameter, PI, 0, PIE);

    noStroke();
    fill(...(this.colorControlNum % 2 === 0 ? this.color1 : this.color2));
    arc(0, 0, diameter, diameter, PI, 0, PIE);

    noFill();
    stroke(0, 1, 0, 10);
    strokeWeight(this.borderWeight);
    arc(0, 0, diameter, diameter, 0, PI, PIE);

    noStroke();
    fill(...(this.colorControlNum % 2 === 0 ? this.color2 : this.color1));
    arc(0, 0, diameter, diameter, 0, PI, PIE);
    pop();
  }
}