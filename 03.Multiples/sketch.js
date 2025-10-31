function setup() {
  createCanvas(600, 400);
  noStroke();
  rectMode(CENTER);
}
 function draw () {
background(0);

//Number of columns and rows 
let cols = 10;
let rows = 8;

//Loop through rows and columns
for (let i = 0; i <cols; i++) {
  for (let j = 0; j < rows; j++) {

// calculate x and y position for each square 
let x = i * 60 + 30;
let y = j * 50 + 25;

// create color variation 
let r = map (i, 0, cols, 50, 255);
let g = map (j, 0, rows, 50, 255);
let b = map (mouseX, 0, width, 100, 255); // reacts to mouse

fill (r,g,b);
rect (x,y, 50,50);

//Title
fill(255);
textAlign(CENTER);
text("Multiples: Color Grid - Move your mouse", width/2, height - 10);
}
}
 }
