let bgLayer;

// Variables of Music
let music;
let amplitude;
let isPlaying = false;

let groundPointArray = [];

let firstBranchArray = [];

let leftBranch = [];

let leftUpBranch = [];

let rightBranch = [];

let rightUpBranch = [];

let secondUpBranch = [];

let secondleftBranch = [];

let secondleftUpBranch = [];

let secondRightBranch = [];

let secondRightUpBranch = [];

let lineArray = [];

let semiCircleArray = [];

let xPos;
let yPos;

let maxLineLength = 80;

let r;
let g;
let b;

let imgDrwPrps = { aspect: 0, width: 0, height: 0, xOffset: 0, yOffset: 0 };
let canvasAspectRatio = 0;
const canvasWidth = 600;
const canvasHeight = 800;

function setup() {
  createCanvas(windowWidth, windowHeight);

  bgLayer = createGraphics(canvasWidth, canvasHeight);
  bgLayer.background(255);

  // Set Audio Analysis
  amplitude = new p5.Amplitude();
  
  // Add play button
  let playButton = createButton('play/stop');
  playButton.position(20, 20);
  playButton.mousePressed(togglePlay);

  imgDrwPrps.aspect = canvasWidth / canvasHeight;

  calculateImageDrawProps();

  xPos = canvasWidth / 2;
  yPos = canvasHeight / 2;
  r = 0;
  g = random(255);
  b = random(255);

  let firstStartPointOfTheGround = new Point(200, 595);

  setThePoint(firstStartPointOfTheGround);
  addLineAndBallToArray();

  for (let i = 0; i < 5000; i++) {
    drawRandomLine();
  }

}

function draw() {
  background(255);

  image(
    bgLayer,
    imgDrwPrps.xOffset,
    imgDrwPrps.yOffset,
    imgDrwPrps.width,
    imgDrwPrps.height
  );

  // Obtain audio analysis data
  let level = amplitude.getLevel();
  let musicMovement = map(level, 0, 1, 0.5, 2.5); // The zoom range is from 0.5 to 2.5.

  push();
  translate(imgDrwPrps.xOffset, imgDrwPrps.yOffset);
  scale(imgDrwPrps.width / canvasWidth, imgDrwPrps.height / canvasHeight);

  for (let i = 0; i < 8; i++) {
    drawRandomLine(); // Draw multiple lines per frame to accelerate density accumulation
  }

  // Randomly scale circles based on music amplitude
  for (let i = 0; i < semiCircleArray.length; i++) {
    if (isPlaying) {
      // Randomly decide whether to scale this circle to create a random effect
      if (random() < 0.05) { // 5% chance to change scale
        //Scale based on the music amplitude with some randomness added
        let scaleFactor = musicMovement * random(0.8, 1.2);
        semiCircleArray[i].updateScale(scaleFactor);
      }
    }
    semiCircleArray[i].display();
  }

  for (let i = 0; i < lineArray.length; i++) {
    lineArray[i].display();
  }

  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

  calculateImageDrawProps();
}

function calculateImageDrawProps() {
  const canvasAspectRatio = width / height;

  if (imgDrwPrps.aspect > canvasAspectRatio) {
    imgDrwPrps.width = width;
    imgDrwPrps.height = width / imgDrwPrps.aspect;
    imgDrwPrps.yOffset = (height - imgDrwPrps.height) / 2;
    imgDrwPrps.xOffset = 0;
  }
  else if (imgDrwPrps.aspect < canvasAspectRatio) {
    imgDrwPrps.height = height;
    imgDrwPrps.width = height * imgDrwPrps.aspect;
    imgDrwPrps.xOffset = (width - imgDrwPrps.width) / 2;
    imgDrwPrps.yOffset = 0;
  }
  else {
    imgDrwPrps.width = width;
    imgDrwPrps.height = height;
    imgDrwPrps.xOffset = 0;
    imgDrwPrps.yOffset = 0;
  }
}

function drawRandomLine() {
  push();
  let nextX = xPos + random(-maxLineLength, maxLineLength);
  let nextY = yPos + random(-maxLineLength, maxLineLength);

  nextX = constrain(nextX, 0, canvasWidth);
  nextY = constrain(nextY, 0, canvasHeight);

  g += random(-10, 10);
  b += random(-10, 10);

  g = constrain(g, 0, 200);
  b = constrain(b, 0, 255);

  bgLayer.stroke(r, g, b, 80);
  bgLayer.strokeWeight(1);
  bgLayer.line(xPos, yPos, nextX, nextY);

  xPos = nextX;
  yPos = nextY;
  pop();
}


function setThePoint(firstStartPointOfTheGround) {
  groundPointArray[0] = firstStartPointOfTheGround;

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

  for (let i = 0; i < 4; i++) {
    let newPointOfTheLeftBranch = new Point(
      leftBranch[i].x + getRandomValueUsePerlin(30, 50, -1),
      leftBranch[i].y + getRandomValueUsePerlin(1, 5, -1)
    );
    leftBranch[i + 1] = newPointOfTheLeftBranch;
  }

  leftUpBranch[0] = leftBranch[leftBranch.length - 1];

  for (let i = 0; i < 4; i++) {
    let newPointOfTheLeftUpBranch = new Point(
      leftUpBranch[i].x + getRandomValueUsePerlin(1, 5),
      leftUpBranch[i].y + getRandomValueUsePerlin(20, 35, -1)
    );
    leftUpBranch[i + 1] = newPointOfTheLeftUpBranch;
  }

  for (let i = 0; i < 4; i++) {
    let newPointOfTheRightBranch = new Point(
      rightBranch[i].x + getRandomValueUsePerlin(20, 50, 1),
      rightBranch[i].y + getRandomValueUsePerlin(1, 5, -1)
    );
    rightBranch[i + 1] = newPointOfTheRightBranch;
  }

  rightUpBranch[0] = rightBranch[rightBranch.length - 1];

  for (let i = 0; i < 4; i++) {
    let newPointOfTheRightUpBranch = new Point(
      rightUpBranch[i].x + getRandomValueUsePerlin(1, 5),
      rightUpBranch[i].y + getRandomValueUsePerlin(20, 35, -1)
    );
    rightUpBranch[i + 1] = newPointOfTheRightUpBranch;
  }

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

  for (let i = 0; i < 2; i++) {
    let basePoint = secondleftBranch[i];
    let newPointOfTheSecondLeft = new Point(
      basePoint.x + getRandomValueUsePerlin(5, 25, -1),
      basePoint.y + getRandomValueUsePerlin(1, 5, -1)
    );
    secondleftBranch[i + 1] = newPointOfTheSecondLeft;
  }

  secondleftUpBranch[0] = secondleftBranch[secondleftBranch.length - 1];

  for (let i = 0; i < 2; i++) {
    let newPointOfTheSecondLeftUpBranch = new Point(
      secondleftUpBranch[i].x + getRandomValueUsePerlin(1, 5),
      secondleftUpBranch[i].y + getRandomValueUsePerlin(5, 20, -1)
    );
    secondleftUpBranch[i + 1] = newPointOfTheSecondLeftUpBranch;
  }

  for (let i = 0; i < 2; i++) {
    let basePoint = secondRightBranch[i];
    let newPointOfTheSecondRight = new Point(
      basePoint.x + getRandomValueUsePerlin(5, 25, 1),
      basePoint.y + getRandomValueUsePerlin(1, 5, -1)
    );
    secondRightBranch[i + 1] = newPointOfTheSecondRight;
  }

  secondRightUpBranch[0] = secondRightBranch[secondRightBranch.length - 1];

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
    lineArray.push(
      new Branch(groundPointArray[i], groundPointArray[i + 1], `yellow`, 1)
    );
    semiCircleArray.push(
      new SemiCircle(groundPointArray[i], groundPointArray[i + 1], i)
    );
  }

  for (let i = 0; i < firstBranchArray.length - 1; i++) {
    lineArray.push(
      new Branch(firstBranchArray[i], firstBranchArray[i + 1], `yellow`, 1)
    );
    semiCircleArray.push(
      new SemiCircle(firstBranchArray[i], firstBranchArray[i + 1], i)
    );
  }

  for (let i = 0; i < leftBranch.length - 1; i++) {
    lineArray.push(new Branch(leftBranch[i], leftBranch[i + 1], `yellow`, 1));
    semiCircleArray.push(new SemiCircle(leftBranch[i], leftBranch[i + 1], i));
  }

  for (let i = 0; i < leftUpBranch.length - 1; i++) {
    lineArray.push(
      new Branch(leftUpBranch[i], leftUpBranch[i + 1], `yellow`, 1)
    );
    semiCircleArray.push(
      new SemiCircle(leftUpBranch[i], leftUpBranch[i + 1], i)
    );
  }

  for (let i = 0; i < rightBranch.length - 1; i++) {
    lineArray.push(new Branch(rightBranch[i], rightBranch[i + 1], `yellow`, 1));
    semiCircleArray.push(new SemiCircle(rightBranch[i], rightBranch[i + 1], i));
  }
  for (let i = 0; i < rightUpBranch.length - 1; i++) {
    lineArray.push(
      new Branch(rightUpBranch[i], rightUpBranch[i + 1], `yellow`, 1)
    );
    semiCircleArray.push(
      new SemiCircle(rightUpBranch[i], rightUpBranch[i + 1], i)
    );
  }

  for (let i = 0; i < secondUpBranch.length - 1; i++) {
    lineArray.push(
      new Branch(secondUpBranch[i], secondUpBranch[i + 1], `yellow`, 1)
    );
    semiCircleArray.push(
      new SemiCircle(secondUpBranch[i], secondUpBranch[i + 1], i)
    );
  }

  for (let i = 0; i < secondleftBranch.length - 1; i++) {
    lineArray.push(
      new Branch(secondleftBranch[i], secondleftBranch[i + 1], `yellow`, 1)
    );
    semiCircleArray.push(
      new SemiCircle(secondleftBranch[i], secondleftBranch[i + 1], i)
    );
  }

  for (let i = 0; i < secondleftUpBranch.length - 1; i++) {
    lineArray.push(
      new Branch(secondleftUpBranch[i], secondleftUpBranch[i + 1], `yellow`, 1)
    );
    semiCircleArray.push(
      new SemiCircle(secondleftUpBranch[i], secondleftUpBranch[i + 1], i)
    );
  }

  for (let i = 0; i < secondRightBranch.length - 1; i++) {
    lineArray.push(
      new Branch(secondRightBranch[i], secondRightBranch[i + 1], `yellow`, 1)
    );
    semiCircleArray.push(
      new SemiCircle(secondRightBranch[i], secondRightBranch[i + 1], i)
    );
  }

  for (let i = 0; i < secondRightUpBranch.length - 1; i++) {
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

function preload() {
  soundFormats('mp3');
  music = loadSound('Malte Marten - Reflections (1111 Hz).mp3');
}

// Function to play/pause music
function togglePlay() {
  if (isPlaying) {
    music.pause();
    isPlaying = false;
  } else {
    music.loop();
    isPlaying = true;
  }
}

// Keyboard function rework
function keyPressed() {
  if (key === 'r' || key === 'R') {
    // Reset all circles
    for (let i = 0; i < semiCircleArray.length; i++) {
      semiCircleArray[i].reset();
    }
  }
}
