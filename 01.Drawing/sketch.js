function setup() {
createCanvas(400,400)
}

function draw() {
  background(220);
  circle(250,250,250);
  fill(255,182,193)
  ellipse(250,250,250,250)


//ellipse on the left side
   fill(200, 162, 200);   
  ellipse(200, 200, 100, 100);

  //ellipse on the right side 
  fill(200,162,200);
  ellipse(400 - 200, 200, 100, 100);


}
