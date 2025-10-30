function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220);
}

function draw() {
  background(220);
}

let plants = {};

function setup() {
  createCanvas(500,500);
  nostroke();

  //create several plants at random positions
  for (let i = 0; i < 8; i++) {
    plants, push(new plants(random(width, height - 50, random(30,80))));

  }
}

function draw() {
  background(20,30,40); // night sky feel 
  drawground();

  //draw each plant
  for (let plant of plants) {
    plant.update();
    plant.display();
  }

  //add a gentle title
  fill(220);
  textAlign(CENTER);
  textSize(16);
  text("🌿 Digital Garden 🌿", width / 2, 30);

  //draw the soil at the bottom
  function drawground() {
    fill(40,25,25);
    rect(0, height - 50, wifth, 50);
  }

  //plant class
  class plant {
    constructor(x, y, h) {
      this.x = x;
      this.y = y;
      this.h = h; // maximum height
      this.growth = 0;// how much it has grown
      this.angle = random (TWO_PI); // for swaying
      this.color = color(random(50,100), random (150,255), random(50,150));
    }


      update() {
// slowly grow to full height
if (this.growth < this.h) {
  this.growth += 0.3;
}

//gentle side-to-side sway 
this.angle += 0.02;
 }

 display() {
push();
translate(this.x, this.y);

//stem swat motion
let sway = sin(this.angle) * 10;

//draw stem 
stroke(80,200,100);
strokeWeight(3);
nofill();
beginshape ();
for (let i =0; i < this.growth; i+=5){
  let x = sin(this.angle + i * 0.05) * 5; // bend slightly
  vertex(x -i);
}
 endShape();

 // draw flower at the top
 noStroke ();
 fill(this.color);
 ellipse (sway, -this.growth, 15,15);

 //leaves
 fill(70,100,90);
 ellipse (sway - 10, -this.growth / 2, 10, 6);
 ellipse (sway + 10, -this.growth /2, 10, 6);
 }

  }
}
