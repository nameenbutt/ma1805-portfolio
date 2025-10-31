function setup() {
  createCanvas(600, 300);
  noStroke();
}

let circles = []; 

//Make 20 circles and store their info in an array
for (let i = 0; i < 20; i++) 
  circles.push
({
  x: i* 30+20 // position across the screen
  , y: height / 2 // all start in the middle
  , size: random (15, 30) // small varaition
  , color: color(random(100,255), random (100,255), random (255)) 
});


function draw() {
  background(20);

  //loop through every circle
  for (let i = 0; i < circles.length; i++) {
    let.c = circle [i];

    //move each circle up and down a bit 
    let offset = sin(frameCount * 0.05 + i) * 20;

    fill(c.color);
    ellipse(c.x, c.y + offset, c.size);
  }
}



{

}
