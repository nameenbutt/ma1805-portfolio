function setup() {
createCanvas(400,400)
}

function draw() {
  background(220);
  circle(250,250,250);
  fill(255,182,193)
  ellipse(250,250,250,250)

  //center circle (middle)
  fill(0)
  nostroke();
  ellipse(width/2, height,2,20,20);


}
