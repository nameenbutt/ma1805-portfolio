function setup() {
createCanvas(400,400)
}

function draw() {
  background(220);
  circle(250,250,250);
  fill(255,182,193)
  ellipse(250,250,250,250)

   fill(200, 162, 200);   
  ellipse(200, 200, 100, 100);

  //center circle (middle)
  fill(0)
  nostroke();
  ellipse(width/2, height,2,20,20);// black circle

  //small circles inside the big one
  let sma11R = 10;
  ellipse(x,y, sma11R * 2, sma11R * 2);

}
