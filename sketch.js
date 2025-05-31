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
//Let's make an object to hold the draw properties of the artwork
let imgDrwPrps = { aspect: 0, width: 0, height: 0, xOffset: 0, yOffset: 0 };
let canvasAspectRatio = 0;
const canvasWidth = 600;
const canvasHeight = 800;

function setup() {
  // Create canvas that fills the browser window
  createCanvas(windowWidth, windowHeight);

  // Set aspect ratio of virtual canvas
  imgDrwPrps.aspect = canvasWidth / canvasHeight;

  // Initial calculation of drawing properties
  calculateImageDrawProps();

  // Initialize position at center of virtual canvas
  xPos = canvasWidth / 2;
  yPos = canvasHeight / 2;
  // Initialize color values, Red is delete considering the background
  r = 0;
  g = random(255);
  b = random(255);

  let firstStartPointOfTheGround = new Point(200, 595);

  setThePoint(firstStartPointOfTheGround);
  addLineAndBallToArray();

  console.log(lineArray);
}

function draw() {
  // Apply transformations
  push();
  translate(imgDrwPrps.xOffset, imgDrwPrps.yOffset);
  scale(imgDrwPrps.width / canvasWidth, imgDrwPrps.height / canvasHeight);

  // Draw random line
  drawRandomLine();

  pop();

  for (let i = 0; i < semiCircleArray.length; i++) {
    semiCircleArray[i].display();
  }

  for (let i = 0; i < lineArray.length; i++) {
    lineArray[i].display();
  }
}

// Window resize event
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

  calculateImageDrawProps();
}

// Calculate the canvas aspect ratio
function calculateImageDrawProps() {
  const canvasAspectRatio = width / height;

  // If virtual aspect > canvas aspect (landscape screens)
  if (imgDrwPrps.aspect > canvasAspectRatio) {
    imgDrwPrps.width = width;
    imgDrwPrps.height = width / imgDrwPrps.aspect;
    imgDrwPrps.yOffset = (height - imgDrwPrps.height) / 2;
    imgDrwPrps.xOffset = 0;
  }
  // If virtual aspect < canvas aspect (portrait screens)
  else if (imgDrwPrps.aspect < canvasAspectRatio) {
    imgDrwPrps.height = height;
    imgDrwPrps.width = height * imgDrwPrps.aspect;
    imgDrwPrps.xOffset = (width - imgDrwPrps.width) / 2;
    imgDrwPrps.yOffset = 0;
  }
  // If aspects are equal
  else {
    imgDrwPrps.width = width;
    imgDrwPrps.height = height;
    imgDrwPrps.xOffset = 0;
    imgDrwPrps.yOffset = 0;
  }
}

//Draw a random line
function drawRandomLine() {
  let nextX = xPos + random(-maxLineLength, maxLineLength);
  let nextY = yPos + random(-maxLineLength, maxLineLength);

  // Constrain within virtual canvas bounds
  nextX = constrain(nextX, 0, canvasWidth);
  nextY = constrain(nextY, 0, canvasHeight);

  g += random(-10, 10);
  b += random(-10, 10);

  // Constrain color values
  g = constrain(g, 0, 255);
  b = constrain(b, 0, 255);

  stroke(r, g, b);
  strokeWeight(2);

  // Draw the line
  line(xPos, yPos, nextX, nextY);

  // Update current position
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
      groundPointArray[i].x + getRandomValueUsePerlin(30, 50, 1),
      groundPointArray[i].y + getRandomValueUsePerlin(1, 2)
    );
    groundPointArray[i + 1] = newPointOfTheGround;
  }

  let theMiddlePointOfTheGround =
    groundPointArray[floor(groundPointArray.length / 2)];
  firstBranchArray[0] = theMiddlePointOfTheGround;

  //First Branch Point
  for (let i = 0; i < 5; i++) {
    let newPointOfTheFirstBranch = new Point(
      firstBranchArray[i].x + getRandomValueUsePerlin(1, 5),
      firstBranchArray[i].y + getRandomValueUsePerlin(30, 50, -1)
    );
    firstBranchArray[i + 1] = newPointOfTheFirstBranch;
  }

  let theFirstCrossPoint = firstBranchArray[firstBranchArray.length - 1];
  leftBranch[0] = theFirstCrossPoint;
  rightBranch[0] = theFirstCrossPoint;
  secondUpBranch[0] = theFirstCrossPoint;

  // Left Branch Point
  for (let i = 0; i < 4; i++) {
    let newPointOfTheLeftBranch = new Point(
      leftBranch[i].x + getRandomValueUsePerlin(30, 50, -1),
      leftBranch[i].y + getRandomValueUsePerlin(1, 5, -1)
    );
    leftBranch[i + 1] = newPointOfTheLeftBranch;
  }

  leftUpBranch[0] = leftBranch[leftBranch.length - 1];

  // Left Up Branch Point
  for (let i = 0; i < 4; i++) {
    let newPointOfTheLeftUpBranch = new Point(
      leftUpBranch[i].x + getRandomValueUsePerlin(1, 5),
      leftUpBranch[i].y + getRandomValueUsePerlin(20, 35, -1)
    );
    leftUpBranch[i + 1] = newPointOfTheLeftUpBranch;
  }

  // Right Branch Point
  for (let i = 0; i < 4; i++) {
    let newPointOfTheRightBranch = new Point(
      rightBranch[i].x + getRandomValueUsePerlin(20, 50, 1),
      rightBranch[i].y + getRandomValueUsePerlin(1, 5, -1)
    );
    rightBranch[i + 1] = newPointOfTheRightBranch;
  }

  rightUpBranch[0] = rightBranch[leftBranch.length - 1];

  // Right Up Branch Point
  for (let i = 0; i < 4; i++) {
    let newPointOfTheRightUpBranch = new Point(
      rightUpBranch[i].x + getRandomValueUsePerlin(1, 5),
      rightUpBranch[i].y + getRandomValueUsePerlin(20, 35, -1)
    );
    rightUpBranch[i + 1] = newPointOfTheRightUpBranch;
  }

  //Second Branch Point
  for (let i = 0; i < 2; i++) {
    let newPointOfTheSecondBranch = new Point(
      secondUpBranch[i].x + getRandomValueUsePerlin(1, 5),
      secondUpBranch[i].y + getRandomValueUsePerlin(30, 40, -1)
    );
    secondUpBranch[i + 1] = newPointOfTheSecondBranch;
  }

  let theSecondCrossPoint = secondUpBranch[secondUpBranch.length - 1];
  secondleftBranch[0] = theSecondCrossPoint;
  secondRightBranch[0] = theSecondCrossPoint;

  //SecondLeftBranch
  for (let i = 0; i < 2; i++) {
    let basePoint = secondleftBranch[i];
    let newPointOfTheSecondLeft = new Point(
      basePoint.x + getRandomValueUsePerlin(5, 25, -1),
      basePoint.y + getRandomValueUsePerlin(1, 5, -1)
    );
    secondleftBranch[i + 1] = newPointOfTheSecondLeft;
  }

  secondleftUpBranch[0] = secondleftBranch[secondleftBranch.length - 1];

  //Second Left Up Branch Point
  for (let i = 0; i < 2; i++) {
    let newPointOfTheSecondLeftUpBranch = new Point(
      secondleftUpBranch[i].x + getRandomValueUsePerlin(1, 5),
      secondleftUpBranch[i].y + getRandomValueUsePerlin(5, 20, -1)
    );
    secondleftUpBranch[i + 1] = newPointOfTheSecondLeftUpBranch;
  }

  //secondRightBranch
  for (let i = 0; i < 2; i++) {
    let basePoint = secondRightBranch[i];
    let newPointOfTheSecondRight = new Point(
      basePoint.x + getRandomValueUsePerlin(5, 25, 1),
      basePoint.y + getRandomValueUsePerlin(1, 5, -1)
    );
    secondRightBranch[i + 1] = newPointOfTheSecondRight;
  }

  secondRightUpBranch[0] = secondRightBranch[secondRightBranch.length - 1];

  //Second Right Up Branch Point
  for (let i = 0; i < 2; i++) {
    let newPointOfTheSecondRightUpBranch = new Point(
      secondRightUpBranch[i].x + getRandomValueUsePerlin(1, 5),
      secondRightUpBranch[i].y + getRandomValueUsePerlin(5, 20, -1)
    );
    secondRightUpBranch[i + 1] = newPointOfTheSecondRightUpBranch;
  }
}

function addLineAndBallToArray() {
  for (let i = 0; i < groundPointArray.length - 1; i++) {
    // groundPointArray[i].display();
    lineArray.push(
      new Branch(groundPointArray[i], groundPointArray[i + 1], `yellow`, 1)
    );
    semiCircleArray.push(
      new SemiCircle(groundPointArray[i], groundPointArray[i + 1], i)
    );
  }

  for (let i = 0; i < firstBranchArray.length - 1; i++) {
    // firstBranchArray[i].display();
    lineArray.push(
      new Branch(firstBranchArray[i], firstBranchArray[i + 1], `yellow`, 1)
    );
    semiCircleArray.push(
      new SemiCircle(firstBranchArray[i], firstBranchArray[i + 1], i)
    );
  }

  for (let i = 0; i < leftBranch.length - 1; i++) {
    // leftBranch[i].display();
    lineArray.push(new Branch(leftBranch[i], leftBranch[i + 1], `yellow`, 1));
    semiCircleArray.push(new SemiCircle(leftBranch[i], leftBranch[i + 1], i));
  }

  for (let i = 0; i < leftUpBranch.length - 1; i++) {
    // leftUpBranch[i].display();
    lineArray.push(
      new Branch(leftUpBranch[i], leftUpBranch[i + 1], `yellow`, 1)
    );
    semiCircleArray.push(
      new SemiCircle(leftUpBranch[i], leftUpBranch[i + 1], i)
    );
  }

  for (let i = 0; i < rightBranch.length - 1; i++) {
    // rightBranch[i].display();
    lineArray.push(new Branch(rightBranch[i], rightBranch[i + 1], `yellow`, 1));
    semiCircleArray.push(new SemiCircle(rightBranch[i], rightBranch[i + 1], i));
  }
  for (let i = 0; i < rightUpBranch.length - 1; i++) {
    // rightUpBranch[i].display();
    lineArray.push(
      new Branch(rightUpBranch[i], rightUpBranch[i + 1], `yellow`, 1)
    );
    semiCircleArray.push(
      new SemiCircle(rightUpBranch[i], rightUpBranch[i + 1], i)
    );
  }

  for (let i = 0; i < secondUpBranch.length - 1; i++) {
    // secondUpBranch[i].display();
    lineArray.push(
      new Branch(secondUpBranch[i], secondUpBranch[i + 1], `yellow`, 1)
    );
    semiCircleArray.push(
      new SemiCircle(secondUpBranch[i], secondUpBranch[i + 1], i)
    );
  }

  for (let i = 0; i < secondleftBranch.length - 1; i++) {
    // secondleftBranch[i].display();
    lineArray.push(
      new Branch(secondleftBranch[i], secondleftBranch[i + 1], `yellow`, 1)
    );
    semiCircleArray.push(
      new SemiCircle(secondleftBranch[i], secondleftBranch[i + 1], i)
    );
  }

  for (let i = 0; i < secondleftUpBranch.length - 1; i++) {
    // secondleftUpBranch[i].display();
    lineArray.push(
      new Branch(secondleftUpBranch[i], secondleftUpBranch[i + 1], `yellow`, 1)
    );
    semiCircleArray.push(
      new SemiCircle(secondleftUpBranch[i], secondleftUpBranch[i + 1], i)
    );
  }

  for (let i = 0; i < secondRightBranch.length - 1; i++) {
    // secondRightBranch[i].display();
    lineArray.push(
      new Branch(secondRightBranch[i], secondRightBranch[i + 1], `yellow`, 1)
    );
    semiCircleArray.push(
      new SemiCircle(secondRightBranch[i], secondRightBranch[i + 1], i)
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
    semiCircleArray.push(
      new SemiCircle(secondRightUpBranch[i], secondRightUpBranch[i + 1], i)
    );
  }
}

function getRandomValueUsePerlin(
  min = 0,
  max = 20,
  NegativeAndPositiveNum = random()
) {
  let n = random();
  let value = NegativeAndPositiveNum < 0.5 ? -1 : 1;
  let offset = ceil(map(n, 0, 1, min, max) * value);

  return offset;
}
