function setup() {
  createCanvas(400,400);

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

    
  }
}