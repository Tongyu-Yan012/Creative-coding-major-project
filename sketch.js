// ground Array
let groundPointArray = [{ x: 300, y: 595 }, { x: 246, y: 591 }, { x: 194, y: 589 }, { x: 351, y: 596 }, { x: 406, y: 595 }];

// The first branch Arrary
let firstBranchArray = [{ x: 306, y: 557 },{ x: 304, y: 526 },{ x: 304, y: 490 },{ x: 306, y: 411 },{ x: 307, y: 329 }];

// The first left Branch
let leftBranch = [{ x: 127, y: 84 },{ x: 181, y: 258 },{ x: 182, y: 212 }, { x: 131, y: 136 },  { x: 135, y: 174 },  { x: 188, y: 172 }, { x: 180, y: 327 },  { x: 239, y: 328 },  { x: 278, y: 329 }];

// The first right Branch
let rightBranch = [{ x: 348, y: 329 },  { x: 384, y: 333 },  { x: 421, y: 333 },  { x: 427, y: 272 },  { x: 429, y: 239 },  { x: 434, y: 183 },  { x: 434, y: 154 },  { x: 461, y: 159 },  { x: 504, y: 172 },  { x: 534, y: 183 },  { x: 539, y: 142 }];

// The second up branch Array
let secondUpBranch = [{ x: 309, y: 314 },  { x: 313, y: 289 },  { x: 314, y: 246 }];

// The second left branch
let secondleftBranch = [{ x: 270, y: 246 },{ x: 245, y: 244 },{ x: 268, y: 212 }];

// The second Right Branch
let secondRightBranch = [{ x: 360, y: 245 },  { x: 360, y: 216 }];

// The Array of Line
let lineArray = [];

// The Array of SemiCircle
let semiCircleArray = [];

// Declare global variables for x and y coordinates
let xPos;
let yPos;

// Let's make a variable to control the maximum line length
let maxLineLength = 80;

// Declare global variables for RGB colour values
let r;
let g;
let b;

function setup() {
  createCanvas(600, 800);
  xPos = width / 2;
  yPos = height / 2;
  background(25);


  for(i=0; i<groundPointArray.length; i++){
    let p1 = groundPointArray[i];
    let p2 = groundPointArray[i + 1];
    let newLine =new Branch(p1, p2, `yellow`, 10)
    lineArray.push(newLine)
  }
}

function draw() {
  for (let i = 0; i < 1; i++) {
    drawRandomLine();
  }

  for (let i = 0; i < lineArray.length; i++) {
    lineArray[i].display();
  }

  for (let i = 0;i < groundPointArray.length; i++) {
    groundPointArray[i].display()
  }
}

function drawRandomLine() {
  // Red is delete considering the background
  push();
  r = 0;
  g = random(255);
  b = random(255);
  pop();
  let nextX = xPos + random(-maxLineLength, maxLineLength);
  let nextY = yPos + random(-maxLineLength, maxLineLength);

  nextX = constrain(nextX, 0, width);
  nextY = constrain(nextY, 0, height);

  g += random(-10, 10);
  b += random(-10, 10);

  g = constrain(g, 0, 255);
  b = constrain(b, 0, 255);

  stroke(r, g, b);

  line(xPos, yPos, nextX, nextY);
  xPos = nextX;
  yPos = nextY;
}

function getRandomValueUsePerlin(MagnificationPara = 10) {
  let n = noise(0.01);
  let offset = n * MagnificationPara;

  return offset;
}
