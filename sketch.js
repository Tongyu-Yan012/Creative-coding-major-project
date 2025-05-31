let pointArray = [];

// ground Array
let groundPointArray = [];

// The first branch Arrary
let firstBranchArray = [];

// The first left Branch
let leftBranch = [];

// The left up branch
let leftUpBranch = [];

// The first right Branch
let rightBranch = [];

// The right up Branch
let rightUpBranch = [];

// The second up branch Array
let secondUpBranch = [];

// The second left branch
let secondleftBranch = [];

// The second left Up branch
let secondleftUpBranch = [];

// The second Right Branch
let secondRightBranch = [];

// The second Right Up Branch
let secondRightUpBranch = [];

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
  let firstStartPointOfTheGround = new Point(200, 595);


  setThePoint(firstStartPointOfTheGround);
  addLineToLineArray();

  console.log(lineArray);  
}

function draw() {
  for (let i = 0; i < 1; i++) {
    drawRandomLine();
  }

  for (let i = 0; i < lineArray.length; i++) {
    lineArray[i].display();
  }
}

function drawRandomLine() {
  // Red is delete considering the background
  push();
  r = 0;
  g = random(255);
  b = random(255);

  let nextX = xPos + random(-maxLineLength, maxLineLength);
  let nextY = yPos + random(-maxLineLength, maxLineLength);

  nextX = constrain(nextX, 0, width);
  nextY = constrain(nextY, 0, height);
  // Set a random range of -10 to 10 for each color change.
  g += random(-10, 10);
  b += random(-10, 10);

  g = constrain(g, 0, 255);
  b = constrain(b, 0, 255);

  stroke(r, g, b);
  strokeWeight(1);
  line(xPos, yPos, nextX, nextY);
  xPos = nextX;
  yPos = nextY;
  pop();
}
function setThePoint(firstStartPointOfTheGround) {
  groundPointArray[0] = firstStartPointOfTheGround;
}
function setThePoint(firstStartPointOfTheGround) {
  groundPointArray[0] = firstStartPointOfTheGround;

  //Ground Point
  for (let i = 0; i < 4; i++) {
    let newPointOfTheGround = new Point(
      groundPointArray[i].x + getRandomValueUsePerlin(50, 60, 1),
      groundPointArray[i].y + getRandomValueUsePerlin(1, 2)
    );
    groundPointArray[i + 1] = newPointOfTheGround;
  }

  let theMiddlePointOfTheGround =
    groundPointArray[floor(groundPointArray.length / 2)];
  firstBranchArray[0] = theMiddlePointOfTheGround;

  //First Branch Point
  for (let i = 0; i < 10; i++) {
    let newPointOfTheFirstBranch = new Point(
      firstBranchArray[i].x + getRandomValueUsePerlin(1, 5),
      firstBranchArray[i].y + getRandomValueUsePerlin(20, 30, -1)
    );
    firstBranchArray[i + 1] = newPointOfTheFirstBranch;
  }

  let theFirstCrossPoint = firstBranchArray[firstBranchArray.length - 1];
  leftBranch[0] = theFirstCrossPoint;
  rightBranch[0] = theFirstCrossPoint;
  secondUpBranch[0] = theFirstCrossPoint;

  // Left Branch Point
  for (let i = 0; i < 8; i++) {
    let newPointOfTheLeftBranch = new Point(
      leftBranch[i].x + getRandomValueUsePerlin(10, 20, -1),
      leftBranch[i].y + getRandomValueUsePerlin(1, 5, -1)
    );
    leftBranch[i + 1] = newPointOfTheLeftBranch;
  }

  leftUpBranch[0] = leftBranch[leftBranch.length - 1];

  // Left Up Branch Point
  for (let i = 0; i < 8; i++) {
    let newPointOfTheLeftUpBranch = new Point(
      leftUpBranch[i].x + getRandomValueUsePerlin(1, 5),
      leftUpBranch[i].y + getRandomValueUsePerlin(5, 10, -1)
    );
    leftUpBranch[i + 1] = newPointOfTheLeftUpBranch;
  }

  // Right Branch Point
  for (let i = 0; i < 8; i++) {
    let newPointOfTheRightBranch = new Point(
      rightBranch[i].x + getRandomValueUsePerlin(10, 15, 1),
      rightBranch[i].y + getRandomValueUsePerlin(1, 5, -1)
    );
    rightBranch[i + 1] = newPointOfTheRightBranch;
  }

  rightUpBranch[0] = rightBranch[leftBranch.length - 1];

  // Right Up Branch Point
  for (let i = 0; i < 8; i++) {
    let newPointOfTheRightUpBranch = new Point(
      rightUpBranch[i].x + getRandomValueUsePerlin(1, 5),
      rightUpBranch[i].y + getRandomValueUsePerlin(5, 10, -1)
    );
    rightUpBranch[i + 1] = newPointOfTheRightUpBranch;
  }

  //Second Branch Point
  for (let i = 0; i < 4; i++) {
    let newPointOfTheSecondBranch = new Point(
      secondUpBranch[i].x + getRandomValueUsePerlin(1, 5),
      secondUpBranch[i].y + getRandomValueUsePerlin(10, 20, -1)
    );
    secondUpBranch[i + 1] = newPointOfTheSecondBranch;
  }

  let theSecondCrossPoint = secondUpBranch[secondUpBranch.length - 1];
  secondleftBranch[0] = theSecondCrossPoint;
  secondRightBranch[0] = theSecondCrossPoint;

  //SecondLeftBranch
  for (let i = 0; i < 4; i++) {
    let basePoint = secondleftBranch[i];
    let newPointOfTheSecondLeft = new Point(
      basePoint.x + getRandomValueUsePerlin(10, 20, -1),
      basePoint.y + getRandomValueUsePerlin(1, 5, -1)
    );
    secondleftBranch[i + 1] = newPointOfTheSecondLeft;
  }

  secondleftUpBranch[0] = secondleftBranch[secondleftBranch.length - 1];

  //Second Left Up Branch Point
  for (let i = 0; i < 3; i++) {
    let newPointOfTheSecondLeftUpBranch = new Point(
      secondleftUpBranch[i].x + getRandomValueUsePerlin(1, 5),
      secondleftUpBranch[i].y + getRandomValueUsePerlin(5, 10, -1)
    );
    secondleftUpBranch[i + 1] = newPointOfTheSecondLeftUpBranch;
  }

  //secondRightBranch
  for (let i = 0; i < 4; i++) {
    let basePoint = secondRightBranch[i];
    let newPointOfTheSecondRight = new Point(
      basePoint.x + getRandomValueUsePerlin(10, 20, 1),
      basePoint.y + getRandomValueUsePerlin(1, 5, -1)
    );
    secondRightBranch[i + 1] = newPointOfTheSecondRight;
  }

  secondRightUpBranch[0] = secondRightBranch[secondRightBranch.length - 1];

  //Second Right Up Branch Point
  for (let i = 0; i < 3; i++) {
    let newPointOfTheSecondRightUpBranch = new Point(
      secondRightUpBranch[i].x + getRandomValueUsePerlin(1, 5),
      secondRightUpBranch[i].y + getRandomValueUsePerlin(5, 10, -1)
    );
    secondRightUpBranch[i + 1] = newPointOfTheSecondRightUpBranch;
  }
}

function addLineToLineArray() {
  for (let i = 0; i < groundPointArray.length - 1; i++) {
    // groundPointArray[i].display();
    lineArray.push(
      new Branch(groundPointArray[i], groundPointArray[i + 1], `yellow`, 1)
    );
  }

  for (let i = 0; i < firstBranchArray.length - 1; i++) {
    // firstBranchArray[i].display();
    lineArray.push(
      new Branch(firstBranchArray[i], firstBranchArray[i + 1], `yellow`, 1)
    );
  }

  for (let i = 0; i < leftBranch.length - 1; i++) {
    // leftBranch[i].display();
    lineArray.push(new Branch(leftBranch[i], leftBranch[i + 1], `yellow`, 1));
  }

  for (let i = 0; i < leftUpBranch.length - 1; i++) {
    // leftUpBranch[i].display();
    lineArray.push(
      new Branch(leftUpBranch[i], leftUpBranch[i + 1], `yellow`, 1)
    );
  }

  for (let i = 0; i < rightBranch.length - 1; i++) {
    // rightBranch[i].display();
    lineArray.push(new Branch(rightBranch[i], rightBranch[i + 1], `yellow`, 1));
  }
  for (let i = 0; i < rightUpBranch.length - 1; i++) {
    // rightUpBranch[i].display();
    lineArray.push(
      new Branch(rightUpBranch[i], rightUpBranch[i + 1], `yellow`, 1)
    );
  }

  for (let i = 0; i < secondUpBranch.length - 1; i++) {
    // secondUpBranch[i].display();
    lineArray.push(
      new Branch(secondUpBranch[i], secondUpBranch[i + 1], `yellow`, 1)
    );
  }

  for (let i = 0; i < secondleftBranch.length - 1; i++) {
    // secondleftBranch[i].display();
    lineArray.push(
      new Branch(secondleftBranch[i], secondleftBranch[i + 1], `yellow`, 1)
    );
  }

  for (let i = 0; i < secondleftUpBranch.length - 1; i++) {
    // secondleftUpBranch[i].display();
    lineArray.push(
      new Branch(secondleftUpBranch[i], secondleftUpBranch[i + 1], `yellow`, 1)
    );
  }

  for (let i = 0; i < secondRightBranch.length - 1; i++) {
    // secondRightBranch[i].display();
    lineArray.push(
      new Branch(secondRightBranch[i], secondRightBranch[i + 1], `yellow`, 1)
    );
  }

  for (let i = 0; i < secondRightUpBranch.length - 1; i++) {
    // secondRightUpBranch[i].display();
    lineArray.push(
      new Branch(
        secondRightUpBranch[i],
        secondRightUpBranch[i + 1],
        `yellow`,
        1
      )
    );
  }
}

function getRandomValueUsePerlin(
  min = 0,
  max = 20,
  NegativeAndPositiveNum = random()
) {
  let n = noise(0.01);
  let value = NegativeAndPositiveNum < 0.5 ? -1 : 1;
  let offset = ceil(map(n, 0, 1, min, max) * value);

  return offset;
}
