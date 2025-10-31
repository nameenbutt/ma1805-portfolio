function setup() {
  createCanvas(400,400);
}

  function draw() {
    background(220);
  }

  let plants = [];

  function setup() {
    createCanvas(500, 500);
    noStroke();

    //create several plants at random positions 
    for (let i = 0; i < 8; i++) {
      plants.push (new plants(random(width), height - 50, random(30, 80)));

    }
  }
 
  function draw() {
    background(20,30, 40); // night sky feel
    drawGround();

    //draw each plant 
    for (let plant of plants) {
      plant.update();
      plant.display();
    }

    //add a gentle title 
    fill(220);
    textAlign(CENTER);
    textSize(16);
    text("Digital Garden", width / 2, 30);
 }

 //draw soil at bottom
 function drawGround() {
  fill(40,25,15);
  rect(0, height - 50, width, 50);
 }

 // Plant class
 class Plant {
  constructor(x,y, h) {
    this. x = x;
    this.y = y;
    this.h = h; // maximum height
    this.growth = 0; // how much it has grown
    this.angle = random(TWO_PI); // for swaying
    this.color = color(random(50,100), random(150,255), random(50,150));
 }

 update() {
  //slowly grow to full height
  if (this.growtj < this.h) {
    this.growth += 0.3;
}

//gentle side-to-side sway
this.angle += 0.02;
 }

 display() {
 push();
 translate(this.x, this.y);
 

 //stem away motion 
 let sway = sin(this.angle) * 10;

 //draw stem
 stroke(80,200,100);
 strokeWeight(3);
 noFill();
 beginShape();
 for (let i =0; i < this.growth; i += 5) {
  let x= sin(this.angle + i * 0.05) * 5; // bend slightly
  vertex(x, -i);
 }
 
 endshape();

 //draw flower at the top
 noStroke();
 fill(this.color);
 ellipse(sway - 10, -this.growth, 15,25);

 //leaves
 fill(70,180,90);
 ellipse(sway -10, -this.growth /2,10,6);
 ellipse(sway +10, -this.growth /2, 10,6);

 pop();
}
 }