// The Array of Point
let pointArray = [];

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
  
  // Red is delete considering the background
  r = 0;                
  g = random(255);      
  b = random(255);      
  
  background(32);
}

function draw() {
  for (let i = 0; i < 1; i++) {
    drawRandomLine();
  }
}

function drawRandomLine() {
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
