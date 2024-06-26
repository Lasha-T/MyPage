
let branches = [];
let beta = 0;
let gamma = 0;
let canvas;

let startPointPosition = [1, 2, 3, 4]; // Array containing start point positions
let initialAngleRanges = [
  { min: -350, max: -280 },
  { min: -260, max: -190 },
  { min: -170, max: -100 },
  { min: -80, max: -10 }
];

let initialAngleMin;
let initialAngleMax;

function getInitialAngles(startPointPosition) {
  let index = startPointPosition - 1; // Calculate index within range
  let { min, max } = initialAngleRanges[index];
  initialAngleMin = min * (Math.PI / 180);
  initialAngleMax = max * (Math.PI / 180);
}

let currentStartPoint;
function runOneWave() {
  currentStartPoint = startPointPosition.shift(); // Remove the first element and get its value
  startPointPosition.push(currentStartPoint); // Push the value to the end of the array
  getInitialAngles(currentStartPoint);
  oneWave(currentStartPoint);
  // console.log(`Start Point Position: ${currentStartPoint}, Initial Angle Min: ${initialAngleMin}, Initial Angle Max: ${initialAngleMax}`);
}







function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0); // Set canvas position to top-left corner
  canvas.style('z-index', '-1'); // Set canvas behind other elements

  // Listen for device orientation changes
  window.addEventListener('deviceorientation', handleOrientation);

  noFill();
  smooth();
  colorMode(HSB);
  strokeCap(SQUARE);
  strokeWeight(1);

}

setTimeout(function() {
  runOneWave();

  // Run the function every 7 seconds
  setInterval(function() {
    clearBranches(); // Remove branches gradually

    // Check if all branches are removed before starting the next wave
    let checkInterval = setInterval(function() {
      if (branches.length === 0) {
        clearInterval(checkInterval); // Stop checking when all branches are removed
        runOneWave(); // Create new branches after removing the old ones
      }
    }, 100); // Check every 100 milliseconds
  }, 7000); // Wait 7 seconds before removing branches
}, 1000); // Wait 1 second before starting the first wave


function handleOrientation(event) {
  // Extract beta and gamma angles from the event
  beta = event.beta; // X-axis (tilt forward and backward)
  gamma = event.gamma; // Y-axis (tilt left and right)
}


function oneWave(currentStartPoint) {
  noiseSeed(Math.random());
  branches = []; // Clear existing branches
  const startColor = color(random(0, 360), 70, 100, 0.25); // Random start color for all lines
  const initialAngle = random(initialAngleMin, initialAngleMax); // Random initial angle for each line with increased range
 

  // Generate a random number of lines with interpolated colors between startColor and white
  const numWhiteLines = int(random(10, 21)); // Random number between 20 and 30
  for (let i = 0; i < numWhiteLines; i++) {
    let interpolationFactor = random(0.2, 0.4); // Random factor for interpolation between startColor and white
    let interpolatedColor = lerpColor(startColor, color(255), interpolationFactor); // Interpolate between startColor and white
    branches.push(new Branch(interpolatedColor, initialAngle, currentStartPoint)); // Add lines with interpolated color
  }
  
  // Generate a random number of lines with gradient colors between startColor and white
  const numGradientLines = int(random(10, 21)); // Random number between 40 and 50
  for (let i = 0; i < numGradientLines; i++) {
    const startColor = color(random(0, 360), 70, 100, 0.25); // Random start color for the current line
    const initialAngle = random(initialAngleMin, initialAngleMax); // Random initial angle for each line with increased range
    
    let startInterpolationFactor = random(0.2, 0.6); // Random factor for interpolation between startColor and white at the start
    let endInterpolationFactor = random(0.2, 0.6); // Random factor for interpolation between startColor and white at the end
    
    let startGradientColor = lerpColor(startColor, color(255), startInterpolationFactor); // Gradient color at the start
    let endGradientColor = lerpColor(startColor, color(255), endInterpolationFactor); // Gradient color at the end
    
    branches.push(new Branch(startGradientColor, endGradientColor, initialAngle, currentStartPoint)); // Add line with gradient colors
  }
      
  // Generate the remaining lines with random colors
  const numRemainingLines = 30 - numWhiteLines;
  for (let i = 0; i < numRemainingLines; i++) {
    branches.push(new Branch(startColor, initialAngle, currentStartPoint)); // Add lines with random colors
  }
}



function clearBranches() {
  branches = [];
  clear();
}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  // No need to use background() function here
  branches.forEach(branch => {
    branch.update();
    branch.draw();
  });
}

class Branch {
  constructor(startColor, initialAngle, currentStartPoint) {
    this.v = [];
    this.setInitialCoordinates();
    // this.x = 0; // Set the starting x-coordinate to the left edge of the canvas
    // this.y = height; // Set the starting y-coordinate to the middle of the canvas
    this.prevx = this.x;
    this.prevy = this.y;
    this.startColor = startColor; // Start color passed from mouseClicked()
    this.endColor = color(255); // End color (white)
    this.v.push({ x: this.x, y: this.y, color: this.startColor }); // Store color for each vertex
    this.moving = true;
    this.angle = initialAngle; // Use the initial angle for all lines
    this.angleChange = random(-0.04, 0.04); // Random angle change (increased range)
    this.speed = random(3, 6); // Random speed (increased for faster movement)
    this.timer = int(random(25, 50)); // Random timer (reduced for faster direction change)
  }

  setInitialCoordinates() {
    switch (currentStartPoint) {
      case 1: // Top left corner
        this.x = 0;
        this.y = 0;
        break;
      case 2: // Top right corner
        this.x = width;
        this.y = 0;
        break;
      case 3: // Bottom right corner
        this.x = width;
        this.y = height;
        break;
      case 4: // Bottom left corner
        this.x = 0;
        this.y = height;
        break;
      default:
        console.error("Invalid start point position:", currentStartPoint);
    }
  }

  draw() {
    for (let i = 0; i < this.v.length - 1; i++) {
      const x1 = this.v[i].x;
      const y1 = this.v[i].y;
      const x2 = this.v[i + 1].x;
      const y2 = this.v[i + 1].y;
      stroke(this.startColor); // Use start color for all line segments
      strokeWeight(0.02); // Adjust the stroke weight
      line(x1, y1, x2, y2); // Draw line segment
    }
  }


  // Update function in the Branch class
  update() {
    if (this.moving) {
      // Randomly change direction after a certain time
      this.timer--;
      if (this.timer <= 0) {
        this.angleChange = random(-0.01, 0.01);
        this.timer = int(random(25, 100)); // Reset timer
      }

      // Check if the angle change exceeds 150 degrees and change direction if it does
      if (abs(degrees(this.angleChange)) > 180) {
        this.angleChange *= -1; // Change direction to opposite
      }

      // Apply direction change for lines that are relatively close to each other
      if (this.y < height / 2 + 50 && this.y > height / 2 - 50) { // Check if the line is close to the middle of the canvas
        this.angle += this.angleChange;
      }

      this.move();
      this.draw();
      this.prevx = this.x;
      this.prevy = this.y;
    }
  }

  move() {
    // Update angle for less curved movement
    this.angle += this.angleChange;
    // Calculate new coordinates based on angle and speed
    const dx = cos(this.angle) * this.speed;
    const dy = sin(this.angle) * this.speed;
    // Update position
    this.x += dx;
    this.y += dy;
    this.v.push({ x: this.x, y: this.y });
  }
}
