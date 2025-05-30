// ground Array
let groundPointArray = [new Point(300, 595), new Point(246,  591), new Point ( 194,  589), new Point  (351,  596), new Point  (406,  595) ];

// The first branch Arrary

let firstBranchArray = [new Point ( 306,  557 ),new Point ( 304,  526),new Point  (304,  490 ),new Point  (306,  411),new Point  (307,  329 )];

// The first left Branch
let leftBranch = [new Point  (127,  84),new Point  (181,  258),new Point  (182,  212), new Point  (131,  136),  new Point  (135,  174),  new Point  (188,  172), new Point  (180,  327),  new Point  (239,  328),  new Point  (278,  329)];

// The first right Branch
let rightBranch = [new Point (348,  329),  new Point  (384,  333),  new Point  (421,  333),  new Point  (427,  272),  new Point  (429,  239),  new Point  (434,  183),  new Point  (434,  154),  new Point  (461,  159),  new Point  (504,  172),  new Point  (534,  183),  new Point  (539,  142 )];

// The second up branch Array
let secondUpBranch = [new Point  (309,  314),  new Point  (313,  289),  new Point  (314,  246)];

// The second left branch
let secondleftBranch = [new Point  (270,  246),new Point  (245,  244),new Point  (268,  212)];

// The second Right Branch
let secondRightBranch = [new Point  (360,  245),  new Point  (360,  216)];

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


  for(let i=0; i < groundPointArray.length - 1; i++){
    let p1 = groundPointArray[i];
    let p2 = groundPointArray[i + 1];
    console.log(p2)
    let branchLine =new Branch(p1, p2, `yellow`, 5)
    lineArray.push(branchLine)
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
  for (let i = 0;i < firstBranchArray.length; i++) {
    firstBranchArray[i].display()
  }
  for (let i = 0;i < secondUpBranch.length; i++) {
    secondUpBranch[i].display()
  }
  for (let i = 0;i < leftBranch.length; i++) {
    leftBranch[i].display()
  }
  for (let i = 0;i < rightBranch.length; i++) {
    rightBranch[i].display()
  }
  for (let i = 0;i < secondleftBranch.length; i++) {
    secondleftBranch[i].display()
  }
  for (let i = 0;i < secondRightBranch.length; i++) {
    secondRightBranch[i].display()
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

function getRandomValueUsePerlin(MagnificationPara = 10) {
  let n = noise(0.01);
  let offset = n * MagnificationPara;

  return offset;
}
