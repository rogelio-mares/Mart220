// Star texutre varible 
let star;
let star2;

// Head Obj Varible
let head;

let shapeArray = [];
var boxTranslationX = -100;
var boxTranslationY = -100;

//Images
function preload() {
  star = loadImage('assets/star.jpeg');
  star2 = loadImage('assets/Star2.png');
  head = loadModel('assets/Head.obj', true);
}


function setup() {
  createCanvas(800, 600, WEBGL);

  shapeArray.push(new shapeclass("box", 90, 90, 90, boxTranslationX, boxTranslationY, 0.02, 0.03, 0, star2));
  shapeArray.push(new shapeclass("cylinder", 50, 50, 0, 100, -0, 0.01, 0.01, 0, star));
}

function draw() {

  background(0);
  normalMaterial();
  
  image(star);

  for (var i = 0; i < shapeArray.length; i++) {
    shapeArray[i].draw(frameCount);
  }

  // cone
  push();
  translate(-200, -100);
  rotateX(frameCount * 0.03);
  rotateY(frameCount * 0.01);
  texture(star);
  cone(30, 70);
  pop();

  // ellipsoid
  push();
  translate(200, 150);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(star);
  ellipsoid(120, 120, 140);
  pop();

  // add a textured torus
  push();
  translate(-350, -150);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(star);
  torus(-130, 15);
  pop();

  // custom shape
  push();
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  translate(-350, -150);
  texture(star);
  beginShape();
  vertex(20, 0, 100, 0, 0);
  vertex(10, 0, 50, 1, 0);
  vertex(10, 10, 100, 1, 1);
  vertex(20, 10, 50, 0, 1);
  endShape(CLOSE);
  pop();

  // atexture model
  push();
  scale(0.9); // Scaled to make model fit into canvas
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(star2);
  model(head);
  pop();


  if (mouseIsPressed) {
    boxTranslationX = 120;
    boxTranslationY = 120;
    boxTranslationX = floor(random(600));
    boxTranslationY = floor(random(400));
  }
}
