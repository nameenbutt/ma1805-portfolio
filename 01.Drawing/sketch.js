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
   // LEFT pupil inside left eye
    fill(0);//black color
    ellipse(200,200,20,20);//left pupil centered

  //ellipse on the right side 
  fill(200,162,200);
    ellipse(300, 200, 100, 100);  // moved from (200, 200) to (300, 200)
    // RIGHT pupil inside right eye
    fill(0);//black color
    ellipse(300,200,20,20);//right pupil centered


    // --- Silly mouth ---
  fill(0); // black for mouth
  ellipse(250, 300, 100, 50); // big oval mouth
  
  // --- Tongue inside ---
  fill(255, 100, 100); // reddish-pink
  ellipse(250, 315, 50, 25); // tongue sticking out a bit

    //smile
    noFill();
    stroke(0);//black color
    strokeWeight(5);
    arc (300,350,50,50,0,PI);//smile



}
