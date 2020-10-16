var hr,mn,sc;


function setup() {
  createCanvas(800,400);
  hr = hour();
  mn = minute();
  sc = second();
  angleMode(DEGREES);
  scAngle = map(sc,0,60,0,360);

}

function draw() {
  background(0,0,0);  
  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
  arc(400, 200, 150, 150, 0, HALF_PI);
  fill("Blue");
arc(400, 200, 160, 160, HALF_PI, PI);
arc(400, 200, 170, 170, PI, PI + QUARTER_PI);
arc(400, 200, 180, 180, PI + QUARTER_PI, TWO_PI);
}