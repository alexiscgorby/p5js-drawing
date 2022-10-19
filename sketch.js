let w = 400;
let h = 400;

function setup() {
  createCanvas(w, h);
}

function draw() {
  background(125);

  fill("black"); 
  strokeWeight(5);
  rect(250, 92, 97, 153);

  fill("white");
  strokeWeight(5);
  rect(240, 100, 90, 150);

  strokeWeight(1)
  fill("yellow");
  circle(285,170,50);

  strokeWeight(1)
  fill("black");
  circle(275,163,6);

  strokeWeight(1)
  fill("black");
  circle(293,163,6);
  
  strokeWeight(2)
  fill("black");
  line(295, 179, 274, 179);

  strokeWeight(4);
  line(1, 300, 800, 300);

  strokeWeight(5);
  line(65, 200, 90, 350, 30, 40);
  line(90, 170, 65, 205, 30, 40);
  line(90, 170, 100, 205, 30, 40);
  line(100, 205, 120, 190, 30, 40);
  line(110, 220, 95, 300, 30, 40);
  line(140, 240, 110, 220, 30, 40);

  fill("blue");
  strokeWeight(2);
  circle(90, 170, 15);

  fill("green");
  strokeWeight(2);
  circle(100, 205, 10);

  fill("white");
  strokeWeight(2);
  circle(120, 190, 17);

  fill("red");
  strokeWeight(2);
  circle(120, 190, 10);

  fill("white");
  strokeWeight(2);
  circle(110, 220, 10);

  fill("blue");
  strokeWeight(2);
  circle(140, 240, 10);

  fill("white");
  strokeWeight(2);
  circle(65, 196, 20); 

  fill("black");
  rect(75, 245, 45, 107);

  fill("brown");
  strokeWeight(5);
  
  rect(70, 250, 40, 100);

}